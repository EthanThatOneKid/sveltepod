// TODO: Write a storybook using URLPattern and switch-true to get the page number from the pathname.
// See:
// https://deno.land/api?s=URLPattern
//
// Run:
// deno run -A --import-map="examples/00/import_map.json" examples/01/main.ts
//

import { compile } from "svelte/compiler";
import { svelte2tsx } from "svelte2tsx";
// import { default as Component } from "./temp.js";

const PAGES = [
  "Once upon a time, there was a boy named Jake who was excitedly on a field trip to the remote forest where there were several science huts. Jake and his classmates were all in the fourth grade, and they were eager to explore the huts and learn about the mysterious scientific research that was being conducted inside them.",
  "As they arrived at the first hut, Jake noticed that there were tunnels interconnecting the huts. The tunnels were dark and mysterious, and Jake could hear strange sounds coming from within. Despite his curiosity, he was hesitant to enter them, but his classmates were urging him on.",
  "As they walked deeper into the tunnels, Jake's eyes slowly adjusted to the dim light. He could see the roots of the trees above them, and water droplets clung to the walls. The air grew colder and the sounds of the forest outside grew fainter. They could hear only the echoing of their own footsteps and the occasional drip of water from the ceiling.",
  "Suddenly, the group heard a faint whispering sound coming from ahead. They stopped and listened, but the whispering stopped as soon as they did. Jake's heart was pounding in his chest, and his palms were sweating. He looked at his classmates nervously, wondering if they had heard it too.",
  "As they continued through the tunnels, the whispering grew louder and more distinct. The children could now make out individual voices, but they were speaking in a language that they didn't recognize. Jake's mind raced with questions and his body trembled with fear.",
  "Finally, they emerged from the tunnels and found themselves in a large underground laboratory. The laboratory was filled with strange equipment and glowing vials of mysterious liquids. Jake looked around in awe, but his wonder quickly turned to horror as he noticed the scientists working in the laboratory.",
  "The scientists were all wearing strange masks that covered their faces, and they were conducting experiments on strange, otherworldly creatures that Jake had never seen before. The creatures were writhing in pain, and their anguished cries filled the room. Jake felt tears welling up in his eyes, and he was desperate to get out of there.",
  "The teachers quickly gathered the children and hurried them out of the laboratory, but the memory of what they had seen stayed with Jake forever. He never forgot the terror of the tunnels and the horrors that he had witnessed in the underground laboratory. He always wondered what the scientists were doing with those strange creatures and why they had to keep it hidden from the world. Every time he thought about the tunnels, he could hear the whispering voices and the anguished cries of the creatures, haunting him for the rest of his life.",
];

const sample = await Deno.readTextFile(
  new URL(import.meta.resolve("./book.svelte")),
);

// TODO: Compile with SSR and without SSR and compare the JS results.
const compiled = compile(sample, { generate: "ssr" });
const typed = svelte2tsx(sample, {});

// Write JS code to temp.js file.
await Deno.writeTextFile(
  new URL(import.meta.resolve("./temp.js")),
  compiled.js.code,
);

// const result = Component.render({
//   props: {
//     data: PAGES,
//   },
// });

console.log({
  typed,
  // result,
  compiled: compiled.ast.instance,
});
