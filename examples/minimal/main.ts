import Component from "./hello-world/main.ts";

const app = new Component({
  target: document,
  hydrate: true,
  props: {
    name: "world",
  },
});

console.log(app);

// TODO:
// - https://svelte.dev/docs/server-side-component-api
// - Exclude generated files from formatting/linting
// - Implement https://etok.codes/deno_generate
//
