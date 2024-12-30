import * as $ from "svelte/internal/server";

export default function _unknown_($$payload, $$props: {
  answer: number;
}) {
  let { answer } = $$props;

  $$payload.out += `<p>The answer is ${$.escape(answer)}</p>`;
}
