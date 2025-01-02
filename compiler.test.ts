import { fail } from "@std/assert";
import { assertSnapshot } from "@std/testing/snapshot";
import { Project } from "ts-morph";
import { compile } from "./compiler.ts";
Deno.test({
  name: "compile",
  permissions: { read: true, write: true },
  async fn(t) {
    await t.step("$store-as-directive", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-as-directive/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-assign", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-assign/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-export-type", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-export-type/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-index", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-index/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-inside-block-without-braces", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-inside-block-without-braces/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-nested-declaration", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-nested-declaration/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-no-instance-only-module-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-no-instance-only-module-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("$store-prop-init", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/$store-prop-init/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("accessors-config-attr-false", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/accessors-config-attr-false/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("accessors-config", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/accessors-config/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("array-binding-export", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/array-binding-export/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ast-offset-none", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ast-offset-none/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ast-offset-some", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ast-offset-some/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("attributes-foreign-ns", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/attributes-foreign-ns/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("await-with-$store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/await-with-$store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("binding-assignment-$store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/binding-assignment-$store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("binding-group-store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/binding-group-store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("circle-drawer-example", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/circle-drawer-example/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("commented-out-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/commented-out-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-default-slot", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-default-slot/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-events-interface-constant", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-events-interface-constant/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-events-interface-dispatcher", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-events-interface-dispatcher/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-events-interface-string-literals", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-events-interface-string-literals/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-events-interface", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-events-interface/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-events-strictEvents", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-events-strictEvents/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-events-type", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-events-type/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-multiple-slots", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-multiple-slots/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-$$slot-interface", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-$$slot-interface/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-$$slot-type", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-$$slot-type/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-crazy-attributes", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-crazy-attributes/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-fallback", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-fallback/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-forward-with-props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-forward-with-props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-inside-await", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-inside-await/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-inside-each", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-inside-each/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-let-forward-named-slot", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-let-forward-named-slot/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-let-forward", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-let-forward/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-nest-scope", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-nest-scope/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-no-space", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-no-space/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-object-key", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-object-key/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-slot-var-shadowing", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-slot-var-shadowing/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("component-with-documentation", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-with-documentation/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step(
      "component-with-indented-multiline-documentation",
      async (s) => {
        const sourceCode = await Deno.readTextFile(
          "./svelte2tsx-samples/component-with-indented-multiline-documentation/input.svelte",
        );
        const resultString = compile(sourceCode);
        if (compiles(resultString)) {
          await assertSnapshot(s, resultString);
        } else {
          fail("Failed to compile");
        }
      },
    );
    await t.step("component-with-multiline-documentation", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/component-with-multiline-documentation/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("const-tag-await-then-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/const-tag-await-then-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("const-tag-await-then", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/const-tag-await-then/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("const-tag-component", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/const-tag-component/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("const-tag-each-destructure", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/const-tag-each-destructure/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("const-tag-each", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/const-tag-each/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("creates-dts", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/creates-dts/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("creates-no-script-dts", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/creates-no-script-dts/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("custom-css-properties-with-$store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/custom-css-properties-with-$store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("debug-block", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/debug-block/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("editing-mustache", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/editing-mustache/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("empty-source", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/empty-source/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-and-forwarded-event", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-and-forwarded-event/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-bubble-component-multi", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-bubble-component-multi/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-bubble-component-with-props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-bubble-component-with-props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-bubble-component", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-bubble-component/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-bubble-element", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-bubble-element/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-bubble-svelte-element", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-bubble-svelte-element/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-dispatcher-events-alias", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-dispatcher-events-alias/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-dispatcher-events", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-dispatcher-events/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("event-dispatchers", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/event-dispatchers/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-class", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-class/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-const-array-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-const-array-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-const-object-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-const-object-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-doc", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-doc/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-js-required-props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-js-required-props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-list-runes.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-list-runes.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-list", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-list/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-references-local", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-references-local/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("export-with-default-multi", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/export-with-default-multi/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("filename-is-invalid-identifier", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/filename-is-invalid-identifier/+page.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("filename-is-invalid-identifiers-only", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/filename-is-invalid-identifiers-only/+page.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("function-scope", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/function-scope/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("generic-attribute-const-modifier", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/generic-attribute-const-modifier/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("import-equal", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/import-equal/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("import-leading-comment", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/import-leading-comment/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("import-single-quote", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/import-single-quote/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("imports-module-instance", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/imports-module-instance/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("imports", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/imports/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("jsdoc-before-first-import", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/jsdoc-before-first-import/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("module-script-and-script-in-line2", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/module-script-and-script-in-line2/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("module-script-and-script-in-line", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/module-script-and-script-in-line/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("module-script-and-script2", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/module-script-and-script2/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("module-script-and-script3.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/module-script-and-script3.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("module-script-and-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/module-script-and-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("nested-$-variables-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/nested-$-variables-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("nested-$-variables-template", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/nested-$-variables-template/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("object-binding-export", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/object-binding-export/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-$store-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-$store-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-assignment-type-cast", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-assignment-type-cast/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-block", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-block/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-break-$", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-break-$/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-declare-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-declare-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-declare-express-starts-with-object", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-declare-express-starts-with-object/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-declare-object", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-declare-object/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step(
      "reactive-declare-same-name-as-function-parameter",
      async (s) => {
        const sourceCode = await Deno.readTextFile(
          "./svelte2tsx-samples/reactive-declare-same-name-as-function-parameter/input.svelte",
        );
        const resultString = compile(sourceCode);
        if (compiles(resultString)) {
          await assertSnapshot(s, resultString);
        } else {
          fail("Failed to compile");
        }
      },
    );
    await t.step("reactive-declare-same-name-as-import", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-declare-same-name-as-import/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-declare", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-declare/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-statements-store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-statements-store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("reactive-store-set", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/reactive-store-set/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("renamed-exports-runes.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/renamed-exports-runes.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("renamed-exports", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/renamed-exports/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("runes-best-effort-types.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/runes-best-effort-types.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("runes-bindable.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/runes-bindable.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("runes-looking-like-stores.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/runes-looking-like-stores.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("runes-only-export.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/runes-only-export.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("runes-with-slots.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/runes-with-slots.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("runes.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/runes.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("script-and-module-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/script-and-module-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("script-in-rawhtml", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/script-in-rawhtml/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("script-inside-head-after-toplevel-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/script-inside-head-after-toplevel-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("script-on-bottom", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/script-on-bottom/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("script-style-like-component", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/script-style-like-component/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("script-with-src", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/script-with-src/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("self-closing-component", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/self-closing-component/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("single-element", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/single-element/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("single-export", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/single-export/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("slot-bind-this", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/slot-bind-this/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("snippet-instance-script.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/snippet-instance-script.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("snippet-module-hoist-1.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/snippet-module-hoist-1.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("snippet-module-hoist-2.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/snippet-module-hoist-2.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("snippet-module-hoist-3.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/snippet-module-hoist-3.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("store-destructuring", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/store-destructuring/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("store-from-module", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/store-from-module/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("store-from-reactive-assignment", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/store-from-reactive-assignment/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("store-import", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/store-import/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("store-property-access", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/store-property-access/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("stores-looking-like-runes", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/stores-looking-like-runes/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("stores-mustache", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/stores-mustache/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("style-after-selfclosing-iframe", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/style-after-selfclosing-iframe/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("style-attribute-bare", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/style-attribute-bare/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("style-attribute", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/style-attribute/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("style-in-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/style-in-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("style", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/style/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("svelte-element", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/svelte-element/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("svelte-self-forward-event", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/svelte-self-forward-event/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("sveltekit-autotypes-$props-rune-no-changes.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/sveltekit-autotypes-$props-rune-no-changes.v5/+page.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("sveltekit-autotypes-$props-rune.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/sveltekit-autotypes-$props-rune.v5/+page.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("sveltekit-autotypes", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/sveltekit-autotypes/+page.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("transforms-interfaces-dts", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/transforms-interfaces-dts/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$Props-interface-only-props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$Props-interface-only-props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$Props-interface", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$Props-interface/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$Props-type", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$Props-type/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$Props-with-$$props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$Props-with-$$props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$generics-accessor-dts", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$generics-accessor-dts/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$generics-accessor", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$generics-accessor/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$generics-dts", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$generics-dts/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$generics-interface-references", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$generics-interface-references/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-$$generics", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-$$generics/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-creates-dts", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-creates-dts/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-event-dispatcher-typed-non-literal", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-event-dispatcher-typed-non-literal/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-event-dispatcher-typed", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-event-dispatcher-typed/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-event-dispatchers-same-event", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-event-dispatchers-same-event/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-event-dispatchers", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-event-dispatchers/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-arrow-function", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-arrow-function/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-boolean", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-boolean/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-const", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-const/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-doc-typedef", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-doc-typedef/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-doc", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-doc/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-has-initializer", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-has-initializer/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-has-type", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-has-type/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-interface", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-interface/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-list-runes.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-list-runes.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-list", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-list/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-export-required-props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-export-required-props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-function-type-scope", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-function-type-scope/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-generics-attribute1", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-generics-attribute1/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-generics-attribute2", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-generics-attribute2/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-multiple-export", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-multiple-export/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-best-effort-types.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-best-effort-types.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-bindable.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-bindable.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-generics.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-generics.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-1.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-1.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-2.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-2.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-4.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-4.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-5.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-5.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-false-1.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-false-1.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-false-2.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-false-2.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-false-3.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-false-3.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-false-4.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-false-4.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-hoistable-props-false-5.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-hoistable-props-false-5.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes-with-slot.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes-with-slot.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-runes.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-runes.v5/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-script-tag-generics", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-script-tag-generics/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-style-and-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-style-and-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step(
      "ts-sveltekit-autotypes-$props-rune-unchanged.v5",
      async (s) => {
        const sourceCode = await Deno.readTextFile(
          "./svelte2tsx-samples/ts-sveltekit-autotypes-$props-rune-unchanged.v5/+page.svelte",
        );
        const resultString = compile(sourceCode);
        if (compiles(resultString)) {
          await assertSnapshot(s, resultString);
        } else {
          fail("Failed to compile");
        }
      },
    );
    await t.step("ts-sveltekit-autotypes-$props-rune.v5", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-sveltekit-autotypes-$props-rune.v5/+page.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-type-assertion", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-type-assertion/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-typed-export-with-default", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-typed-export-with-default/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("ts-uses-$$props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/ts-uses-$$props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("typeof-$store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/typeof-$store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$$props-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$$props-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$$props", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$$props/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$$restProps-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$$restProps-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$$restProps", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$$restProps/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$$slots-script", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$$slots-script/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$$slots", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$$slots/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$property", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$property/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$store-in-event-binding", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$store-in-event-binding/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$store-multiple-variable-declaration", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$store-multiple-variable-declaration/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$store-with-assignment-operators", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$store-with-assignment-operators/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$store-with-increments", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$store-with-increments/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$store-with-unary-operators", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$store-with-unary-operators/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-$store", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-$store/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-accessors-attr-not-present", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-accessors-attr-not-present/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-accessors-attr-present", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-accessors-attr-present/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-accessors-mustachetag-false", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-accessors-mustachetag-false/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-accessors-mustachetag-true", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-accessors-mustachetag-true/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-accessors-no-svelte-options", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-accessors-no-svelte-options/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-svelte-components-let-forward", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-svelte-components-let-forward/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
    await t.step("uses-svelte-components", async (s) => {
      const sourceCode = await Deno.readTextFile(
        "./svelte2tsx-samples/uses-svelte-components/input.svelte",
      );
      const resultString = compile(sourceCode);
      if (compiles(resultString)) {
        await assertSnapshot(s, resultString);
      } else {
        fail("Failed to compile");
      }
    });
  },
});
function compiles(tsSourceCode: string): boolean {
  try {
    const project = new Project({ useInMemoryFileSystem: true });
    project.createSourceFile("", tsSourceCode);
    return true;
  } catch {
    return false;
  }
}
