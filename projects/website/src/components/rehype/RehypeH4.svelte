<script>
  export let properties;
</script>

<h4 {...properties}><slot></slot></h4>

<style>
  h4 {
    font-size: calc(var(--font-scale-4) * 1rem);
    margin: var(--space-l) 0 var(--space-s);
  }

  h4 > :global(a) {
    opacity: 0;
    will-change: opacity;
    margin: 0 var(--space-s);
    text-decoration: none;
  }

  h4:hover > :global(a) {
    opacity: 1;
  }
</style>
