import { sveltepod } from "sveltepod/mod.ts";

// Note: This script is invoked via [`deno generate`](https://deno.land/x/generate).

if (import.meta.main) {
  await sveltepod({
    entryPoints: ["examples/minimal/hello-world.svelte"],
    compileOptions: {
      generate: "ssr",
      sveltePath: "npm:svelte@4.2.1",
    },
  });
  Deno.exit(0);
}
