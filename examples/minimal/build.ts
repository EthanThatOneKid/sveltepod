import { build } from "https://deno.land/x/esbuild@v0.18.6/mod.js";
import { parse } from "https://deno.land/std@0.192.0/flags/mod.ts";
import * as esbuild_svelte from "https://esm.sh/esbuild-svelte@0.7.3";
import * as svelte_preprocess from "https://esm.sh/svelte-preprocess@5.0.4";

if (import.meta.main) {
  main();
}

/**
 * main is the entrypoint of the application.
 */
export async function main() {
  const flags = parse(Deno.args);
  const entryPoints = flags._
    .reduce<string[]>((entryPoints, entryPoint) => {
      if (typeof entryPoint === "string") {
        entryPoints.push(entryPoint);
      }

      return entryPoints;
    }, []);

  const result = await build({
    entryPoints,
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
