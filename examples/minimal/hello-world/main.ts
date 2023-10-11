///<reference types="npm:svelte2tsx@0.6.23/svelte-shims.d.ts" />
;function render() {

   let name: string = "world"/*Ωignore_startΩ*/;name = __sveltets_2_any(name);/*Ωignore_endΩ*/;

  // <!-- <script>
  //   export let name = "world"; -->
;
async () => {

 { svelteHTML.createElement("h1", {}); name;  }
};
return { props: {name: name}, slots: {}, events: {} }}

export default class extends __sveltets_2_createSvelte2TsxComponent(__sveltets_2_partial(['name'], __sveltets_2_with_any_event(render()))) {
}