export { build } from "https://deno.land/x/esbuild@v0.19.5/mod.js";
export { parse } from "https://deno.land/std@0.205.0/flags/mod.ts";
export { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

import esbuild_svelte_default from "npm:esbuild-svelte@0.8.0";
export const esbuild_svelte =
  esbuild_svelte_default as unknown as typeof esbuild_svelte_default.default;

import svelte_preprocess_default from "npm:svelte-preprocess@5.0.4";
export const svelte_preprocess =
  svelte_preprocess_default as unknown as typeof svelte_preprocess_default.default;

export type { CompileOptions } from "npm:svelte@4.2.2/compiler";
export { compile, preprocess } from "npm:svelte@4.2.2/compiler";

export { svelte2tsx } from "npm:svelte2tsx@0.6.23";
