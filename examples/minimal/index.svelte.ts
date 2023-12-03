// Component (Svelte v5.0.0-next.17)
// Note: compiler output will change before 5.0 is released!
import * as $ from "npm:svelte@5.0.0-next.17/internal/server";

export default function Index($$payload, $$props) {
	$.push(false);

	const anchor = $.create_anchor($$payload);

	$$payload.out += `<h1 class="svelte-1tb9iu1">Title</h1> ${anchor}`;
	HelloWorld($$payload, { name: "world" });
	$$payload.out += `${anchor}`;
	$.pop();
}
