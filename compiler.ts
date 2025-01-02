import { exists, expandGlob } from "@std/fs";
import { SEPARATOR } from "@std/path";
import type { CompileOptions } from "svelte/compiler";
import { compile as svelteCompile } from "svelte/compiler";
import { Project } from "ts-morph";
import { svelte2tsx } from "svelte2tsx";

// deno -A compiler.ts
if (import.meta.main) {
  const project = new Project();
  const sourceFile = project.createSourceFile(
    "compiler.test.ts",
    "",
    { overwrite: true },
  );

  sourceFile.addImportDeclaration({
    moduleSpecifier: "@std/assert",
    namedImports: ["fail"],
  });
  sourceFile.addImportDeclaration({
    moduleSpecifier: "@std/testing/snapshot",
    namedImports: ["assertSnapshot"],
  });
  sourceFile.addImportDeclaration({
    moduleSpecifier: "ts-morph",
    namedImports: ["Project"],
  });
  sourceFile.addImportDeclaration({
    moduleSpecifier: "./compiler.ts",
    namedImports: ["compile"],
  });

  sourceFile.addStatements(`Deno.test({
  name: "compile",
  permissions: { read: true, write: true },
  async fn(t) {\n${
    (await Array.fromAsync(
      expandGlob("./svelte2tsx-samples/**/*.svelte"),
      async (entry) => {
        const directoryName = entry.path.split(SEPARATOR).at(-2);
        const directory = `./svelte2tsx-samples/${directoryName}`;
        const file = await exists(`${directory}/input.svelte`)
          ? `${directory}/input.svelte`
          : `${directory}/+page.svelte`;

        return `    await t.step("${directoryName}", async (s) => {
      const sourceCode = await Deno.readTextFile("${file}");
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });`;
      },
    )).join("\n")
  }
  }
  })`);

  sourceFile.addStatements(
    `function compiles(tsSourceCode: string): boolean {
  try {
    const project = new Project({ useInMemoryFileSystem: true });
    project.createSourceFile("", tsSourceCode);
    return true;
  } catch {
    return false;
  }
}`,
  );

  await project.save();
}

/**
 * compile compiles Svelte source code into a standalone TypeScript module.
 */
export function compile(
  sourceCode: string,
  options: CompileOptions = {},
): string {
  const svelte2tsxResult = svelte2tsx(sourceCode);
  const svelteResult = svelteCompile(
    sourceCode,
    {
      generate: "server",
      ...options,
    },
  );
  return modifyComponentProps(
    svelteResult.js.code,
    getComponentPropsTypeString(svelte2tsxResult.code),
  );
}

function getComponentPropsTypeString(sourceCode: string): string | undefined {
  const inMemoryProject = new Project({ useInMemoryFileSystem: true });
  const sourceFile = inMemoryProject.createSourceFile("", sourceCode);
  const componentPropsNode = sourceFile.getTypeAlias("$$ComponentProps");
  return componentPropsNode?.getTypeNode()?.getText();
}

function modifyComponentProps(code: string, propsTypeString?: string): string {
  if (propsTypeString === undefined) {
    return code;
  }

  return code.replace(
    ", $$props",
    `, ${"$$".repeat(2)}props: ${propsTypeString}`,
  );
}
