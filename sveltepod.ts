import type { CompileOptions } from "./deps.ts";
import {
  build,
  compile,
  denoPlugins,
  // esbuild_svelte,
  parse,
  preprocess,
  Project,
  svelte2tsx,
  svelte_preprocess,
  transform,
} from "./deps.ts";

if (import.meta.main) {
  await sveltepod(fromArgs(Deno.args));
  Deno.exit(0);
}

/**
 * fromArgs parses the options for the sveltepod function from
 * the given args.
 */
export function fromArgs(args: string[]): SveltepodOptions {
  const flags = parse(args);
  const entryPoints = flags._
    .reduce<string[]>((entryPoints, entryPoint) => {
      if (typeof entryPoint === "string") {
        entryPoints.push(entryPoint);
      }

      return entryPoints;
    }, []);

  return {
    entryPoints,
  };
}

/**
 * SveltepodOptions are the options for the sveltepod function.
 */
export interface SveltepodOptions {
  /**
   * entryPoints are the glob patterns for the entry points.
   */
  entryPoints: string[];

  /**
   * imports is the map of import path prefixes to replace
   * with target import map prefixes.
   */
  imports?: Record<string, string>;

  /**
   * compileOptions are the options for the Svelte compiler.
   */
  compileOptions?: CompileOptions;
}

// TODO: Reference
// https://github.com/sveltejs/kit/blob/98e4b8f059d09d57f66a8b513d809867419cc071/packages/package/src/index.js#L196

/**
 * sveltepod builds the given entry points.
 */
export async function sveltepod(options: SveltepodOptions) {
  const project = new Project({ useInMemoryFileSystem: true });
  const results = await Promise.all(
    options.entryPoints.map(async (entryPoint) => {
      const outputFilePath = replaceSvelteExtension(entryPoint);
      const outputFile = project.createSourceFile(outputFilePath);

      // Read the source code.
      const source = Deno.readTextFileSync(entryPoint);

      // Compile SSR code.
      // Reference:
      // - https://svelte.dev/docs/svelte-compiler#types-compileoptions
      // TODO:
      // - Log compile result stats.
      // - Log compile result warnings.
      const preprocessResult = await preprocess(
        source,
        [
          {
            markup: (markupCtx) => {
              console.log(JSON.stringify({ markupCtx }, null, 2));
            },
            script: (scriptCtx) => {
              console.log(JSON.stringify({ scriptCtx }, null, 2));
            },
            style: (styleCtx) => {
              console.log(JSON.stringify({ styleCtx }, null, 2));
            },
          },
          svelte_preprocess(),
        ],
        {
          filename: entryPoint,
        },
      );

      // Compile Svelte code.
      const compileResult = compile(
        preprocessResult.code,
        options.compileOptions,
      );
      outputFile.addStatements(compileResult.js.code);

      // Replace import path prefixes.
      const importDeclarations = outputFile.getImportDeclarations();
      for (const importDeclaration of importDeclarations) {
        const originalModuleSpecifier = importDeclaration.getModuleSpecifier()
          .getLiteralValue();
        const replacementModuleSpecifier = replaceSvelteExtension(
          resolveImport(originalModuleSpecifier, options.imports),
        );
        importDeclaration.setModuleSpecifier(replacementModuleSpecifier);
      }

      // Compile client code.
      // const csrResult = compile(code, {
      //   ...options.compileOptions,
      //   generate: "dom",
      // });
      // const csrJSResult = csrResult.js.code;
      // const csrCSSResult = csrResult.css.code;

      // let result = lines.join("\n");
      // if (options.imports) {
      //   result = replaceImportPathPrefixes(result, options.imports);
      // }

      console.log(JSON.stringify(compileResult, null, 2));
      return compileResult.js.code;
    }),
  );

  const cwd = Deno.cwd();
  for (const sourceFile of project.getSourceFiles()) {
    const fullText = sourceFile.getFullText();
    Deno.mkdirSync(cwd + sourceFile.getDirectoryPath(), { recursive: true });
    Deno.writeTextFileSync(cwd + sourceFile.getFilePath(), fullText);
  }

  return results;
}

function resolveImport(
  specifier: string,
  imports?: Record<string, string>,
): string {
  if (imports !== undefined) {
    for (const [prefix, replacement] of Object.entries(imports)) {
      if (specifier.startsWith(prefix)) {
        return replacement + specifier.slice(prefix.length);
      }
    }
  }

  return specifier;
}

function replaceSvelteExtension(path: string): string {
  return path.replace(/\.svelte$/, ".svelte.ts");
}
