<script>
  import BookPage from "./book_page.svelte";
  export let data = [];

  let x = 0;
  x++;
</script>

{x}

{#each data as book}
  <BookPage content={book.content} caption={book.caption} />
{/each}
