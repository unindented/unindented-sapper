<script>
  export let properties;
</script>

<h5 {...properties}><slot></slot></h5>

<style>
  h5 {
    font-size: calc(var(--font-scale-5) * 1rem);
    margin: var(--space-l) 0 var(--space-s);
  }

  h5 > :global(a) {
    opacity: 0;
    will-change: opacity;
    margin: 0 var(--space-s);
    text-decoration: none;
  }

  h5:hover > :global(a) {
    opacity: 1;
  }
</style>
