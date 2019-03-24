<script>
  export let properties;
</script>

<figure {...properties}><slot></slot></figure>

<style>
  figure {
    background-color: var(--color-subtle-background);
    grid-column: full !important;
    grid-template-columns: none;
    overflow-x: auto;
  }

  figure :global(canvas),
  figure :global(img) {
    border: 0;
    border-radius: 0;
    width: 100%;
  }
</style>
