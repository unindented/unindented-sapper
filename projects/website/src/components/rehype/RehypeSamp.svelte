<script>
  export let properties;
</script>

<samp {...properties}><slot></slot></samp>

<style>
  samp {
    background-color: var(--color-subtle-background);
    border-radius: var(--border-radius);
    display: inline-block;
    padding: 0 var(--space-xs);
  }
</style>
