//deno:generate -command build deno run -A build.ts
//deno:generate build ./pages/todos/page.svelte ./pages/todos_item/page.svelte
import TODOS_PAGE from "./pages/todos/mod.ts";
import TODOS_ITEM_PAGE from "./pages/todos_item/mod.ts";

if (import.meta.main) {
  main();
}

/**
 * main is the entrypoint of the application.
 */
export function main() {
  Deno.serve(handle);
}

/**
 * handle handles the request and returns a response.
 */
export function handle(request: Request): Response {
  let match = TODOS_URL_PATTERN.exec(request.url);
  if (match) {
    return TODOS_PAGE();
  }

  match = TODOS_ITEM_URL_PATTERN.exec(request.url);
  if (match) {
    return TODOS_ITEM_PAGE(match.pathname.groups.id);
  }

  return new Response("Not found", { status: 404 });
}

/**
 * TODOS_URL_PATTERN matches /todos.
 */
export const TODOS_URL_PATTERN = new URLPattern({ pathname: "/todos" });

/**
 * TODOS_ITEM_URL_PATTERN matches /todos/:id.
 */
const TODOS_ITEM_URL_PATTERN = new URLPattern({ pathname: "/todos/:id" });
