<script>
  export let properties;
</script>

<h3 {...properties}><slot></slot></h3>

<style>
  h3 {
    font-size: calc(var(--font-scale-3) * 1rem);
    margin: var(--space-l) 0 var(--space-s);
  }

  h3 > :global(a) {
    opacity: 0;
    will-change: opacity;
    margin: 0 var(--space-s);
    text-decoration: none;
  }

  h3:hover > :global(a) {
    opacity: 1;
  }
</style>
