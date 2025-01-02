# Sveltepod

[![Built with the Deno Standard Library](https://img.shields.io/badge/Built_with_std-blue?logo=deno)](https://jsr.io/@std)

Svelte in Deno; a Deno alternative to SvelteKit.

## Overview

Sveltepod compiles Svelte components into TypeScript modules that can be
imported and used in Deno.

## Testing strategy

- Copy contents of
  [svelte2tsx samples](https://github.com/sveltejs/language-tools/tree/master/packages/svelte2tsx/test/svelte2tsx/samples)
  to `./svelte2tsx-samples/`.
- Run `deno task generate` to generate a test file that tests the Sveltepod
  compilation of each sample.
- Run `deno task snapshot` to generate a snapshot of the test results.
- Run `deno task test` to compare the test results to the snapshot.
- Run `deno fmt` to format the code and `deno lint` to lint the code for common
  errors.

---

Developed by [**@EthanThatOneKid**](https://github.com/EthanThatOneKid)
