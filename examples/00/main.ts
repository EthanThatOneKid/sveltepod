// Run:
// cd examples/00
// deno run -A --unstable main.ts
//

import { compile } from "svelte/compiler";

Deno.serve(handle);

async function handle(request: Request): Promise<Response> {
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/": {
      return new Response(await render(), {
        headers: { "content-type": "text/html" },
      });
    }

    default: {
      return new Response("Not found", { status: 404 });
    }
  }
}

async function render() {
  const sample = await Deno.readTextFile("./sample_const.svelte");
  // TODO: Compile with SSR and without SSR and compare the JS results.
  const compiled = compile(sample, { generate: "ssr" });
  const { default: Component } = await import(
    `data:text/javascript;base64,${btoa(compiled.js.code)}`
  );
  const rendered = Component.render({ boxes: [{ width: 10, height: 20 }] });
  return `<!DOCTYPE html>
<html>
  <head>${rendered.head}</head>
  <style>${rendered.css.code}</style>
  <body>${rendered.html}</body>
</html>`;
}
