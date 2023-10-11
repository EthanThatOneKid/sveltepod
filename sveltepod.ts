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
}

/**
 * sveltepod builds the given entry points.
 */
export async function sveltepod(options: SveltepodOptions) {
  // const sveltePath = options.sveltePath ?? "svelte";
  const results = await Promise.all(
    options.entryPoints.map(async (entryPoint) => {
      const source = Deno.readTextFileSync(entryPoint);
      const { code } = await preprocess(
        source,
        [
          svelte_preprocess(),
        ],
        {
          filename: entryPoint,
        },
      );

      // https://svelte.dev/docs/svelte-compiler#types-compileoptions
      const outputFileJS = entryPoint.replace(/\.svelte$/, "/main.js");
      const result = compile(code, options.compileOptions);
      Deno.mkdirSync(outputFileJS.replace(/\/[^\/]+$/, ""), {
        recursive: true,
      });
      Deno.writeTextFileSync(outputFileJS, result.js.code);

      // https://github.com/sveltejs/language-tools/tree/master/packages/svelte2tsx#readme
      const outputFileTS = entryPoint.replace(/\.svelte$/, "/main.ts");
      const tsxResult = svelte2tsx(source);
      Deno.mkdirSync(outputFileTS.replace(/\/[^\/]+$/, ""), {
        recursive: true,
      });
      Deno.writeTextFileSync(
        outputFileTS,
        tsxResult.code.replace(
          /^\/\/\/\<reference types="svelte" \/>/,
          `///<reference types="npm:svelte2tsx@0.6.23/svelte-shims.d.ts" />`,
        ),
      );
      return result;
    }),
  );

  console.info(results);
  return results;
}
