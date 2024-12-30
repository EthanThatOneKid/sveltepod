import { Project } from "ts-morph";
import type { CompileOptions } from "svelte/compiler";
import { compile as svelteCompile } from "svelte/compiler";
import { svelte2tsx } from "svelte2tsx";

export function compile(source: string, options: CompileOptions = {}) {
  return svelteCompile(
    source,
    {
      generate: "server",
      ...options,
    },
  );
}

// deno -A compiler.ts
if (import.meta.main) {
  const sourceCode = await Deno.readTextFile("./testdata/props.svelte");
  const svelte2tsxResult = svelte2tsx(sourceCode);
  const svelteResult = compile(sourceCode);
  const resultString = provideComponentProps(
    svelteResult.js.code,
    getComponentProps(svelte2tsxResult.code) ?? "unknown",
  );
  await Deno.writeTextFile("./testdata/props.ts", resultString);
}

function getComponentProps(sourceCode: string): string | undefined {
  const inMemoryProject = new Project({ useInMemoryFileSystem: true });
  const sourceFile = inMemoryProject.createSourceFile("", sourceCode);
  const componentPropsNode = sourceFile.getTypeAlias("$$ComponentProps");
  return componentPropsNode?.getTypeNode()?.getText();
}

function provideComponentProps(code: string, props: string): string {
  return code.replace(
    ", $$props",
    `, ${"$$".repeat(2)}props: ${props}`,
  );
}
