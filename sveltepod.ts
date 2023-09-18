import { build, esbuild_svelte, parse, svelte_preprocess } from "./deps.ts";

if (import.meta.main) {
  const options = parseSveltepodOptions(Deno.args);
  await sveltepod(options);
}

function parseSveltepodOptions(args: string[]): SveltepodOptions {
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
  entryPoints: string[];
}

// https://github.com/EMH333/esbuild-svelte/blob/079a55a972dfe7f04fa27a46c0f605dc06a96178/example-ts/buildscript.js

export async function sveltepod(options: SveltepodOptions) {
  const result = await build({
    entryPoints: options.entryPoints,
    mainFields: ["svelte", "browser", "module", "main"],
    bundle: true,
    outfile: "out.js",
    plugins: [
      // https://svelte.dev/docs/svelte-compiler
      esbuild_svelte.default({
        preprocess: svelte_preprocess.default(),
      }),
    ],
    logLevel: "info",
  });

  console.info(result);
}
