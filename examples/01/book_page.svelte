<script>
  export let content = "";
  export let caption = "";
</script>

<figure>
  <blockquote>
    <p>{content}</p>
  </blockquote>
  <figcaption>{caption}</figcaption>
</figure>

<style>
  figure {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    margin: 5px;
  }

  figcaption {
    font-style: italic;
    font-size: 0.8em;
    text-align: right;
  }
</style>
