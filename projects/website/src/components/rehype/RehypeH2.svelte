<script>
  export let properties;
</script>

<h2 {...properties}><slot></slot></h2>

<style>
  h2 {
    font-size: calc(var(--font-scale-2) * 1rem);
    margin: var(--space-l) 0 var(--space-s);
  }

  h2 > :global(a) {
    opacity: 0;
    will-change: opacity;
    margin: 0 var(--space-s);
    text-decoration: none;
  }

  h2:hover > :global(a) {
    opacity: 1;
  }
</style>
