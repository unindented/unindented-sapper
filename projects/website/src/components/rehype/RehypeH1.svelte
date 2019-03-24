<script>
  export let properties;
</script>

<h1 {...properties}><slot></slot></h1>

<style>
  h1 {
    font-size: calc(var(--font-scale-1) * 1rem);
    margin: var(--space-xl) 0;
  }

  h1 > :global(a) {
    opacity: 0;
    will-change: opacity;
    margin: 0 var(--space-s);
    text-decoration: none;
  }

  h1:hover > :global(a) {
    opacity: 1;
  }
</style>
