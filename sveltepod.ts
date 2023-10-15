import type { CompileOptions } from "./deps.ts";
import {
  build,
  compile,
  denoPlugins,
  // esbuild_svelte,
  parse,
  preprocess,
  svelte2tsx,
  svelte_preprocess,
} from "./deps.ts";

if (import.meta.main) {
  await sveltepod(parseSveltepodOptions(Deno.args));
  Deno.exit(0);
}

/**
 * parseSveltepodOptions parses the options for the sveltepod function from
 * the given args.
 */
export function parseSveltepodOptions(args: string[]): SveltepodOptions {
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
   * compileOptions are the options for the Svelte compiler.
   */
  compileOptions?: CompileOptions;

  // TODO: Add generation output configuration.

  svelte2tsxPath?: string;
}

/**
 * sveltepod builds the given entry points.
 */
export async function sveltepod(options: SveltepodOptions) {
  // const sveltePath = options.sveltePath ?? "svelte";
  const results = await Promise.all(
    options.entryPoints.map(async (entryPoint) => {
      // Read the source code.
      const source = Deno.readTextFileSync(entryPoint);

      // Generate the TypeScript code.
      const lines: string[] = [];

      // Generate component types.
      // Reference:
      // - https://github.com/sveltejs/language-tools/tree/3dc6ede879be9f36eda2f023c3c53c55df631e3a/packages/svelte2tsx#:~:text=The%20TSX%20can%20be%20type%20checked%20using%20the%20included%20svelte%2Djsx.d.ts%20and%20svelte%2Dshims.d.ts.
      const svelte2tsxPath = options.svelte2tsxPath ?? "npm:svelte2tsx@0.6.23";
      const tsxResult = svelte2tsx(source)
        .code
        .replace(
          /^\/\/\/\<reference types="svelte" \/>/,
          ["/svelte-jsx.d.ts", "/svelte-shims.d.ts"]
            .map((path) => `import "${svelte2tsxPath}${path}";`)
            .join("\n"),
        )
        .replace(
          /export default class extends __sveltets_2_createSvelte2TsxComponent/,
          "export class TsxComponent extends __sveltets_2_createSvelte2TsxComponent",
        );
      lines.push(tsxResult);

      // Compile SSR code.
      // Reference:
      // - https://svelte.dev/docs/svelte-compiler#types-compileoptions
      // TODO:
      // - Log compile result stats.
      // - Log compile result warnings.
      const { code } = await preprocess(
        source,
        [svelte_preprocess()],
        {
          filename: entryPoint,
        },
      );
      const ssrResult = compile(code, {
        ...options.compileOptions,
        generate: "ssr",
      });
      const ssrJSResult = ssrResult.js.code;
      // const ssrCSSResult = ssrResult.css.code;
      lines.push(ssrJSResult);

      // Compile client code.
      // const csrResult = compile(code, {
      //   ...options.compileOptions,
      //   generate: "dom",
      // });
      // const csrJSResult = csrResult.js.code;
      // const csrCSSResult = csrResult.css.code;

      const outputFilePath = entryPoint.replace(/\.svelte$/, ".svelte.ts");
      const result = lines.join("\n");
      Deno.writeTextFileSync(outputFilePath, result);

      return result;
    }),
  );

  console.info(results);
  return results;
}
