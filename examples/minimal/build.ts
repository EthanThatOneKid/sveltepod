import { sveltepod } from "sveltepod/mod.ts";

// Note: This script is invoked via [`deno generate`](https://deno.land/x/generate).

if (import.meta.main) {
  await sveltepod({
    entryPoints: [
      "./examples/minimal/index.svelte",
    ],
    imports: {
      "svelte": "npm:svelte@5.0.0-next.17",
    },
    compileOptions: {
      generate: "server" as "ssr",
      css: "external",
      name: "Index",
      accessors: true,
    },
  });
  Deno.exit(0);
}
