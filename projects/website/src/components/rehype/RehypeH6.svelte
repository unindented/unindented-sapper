<script>
  export let properties;
</script>

<h6 {...properties}><slot></slot></h6>

<style>
  h6 {
    font-size: calc(var(--font-scale-6) * 1rem);
    margin: var(--space-l) 0 var(--space-s);
  }

  h6 > :global(a) {
    opacity: 0;
    will-change: opacity;
    margin: 0 var(--space-s);
    text-decoration: none;
  }

  h6:hover > :global(a) {
    opacity: 1;
  }
</style>
