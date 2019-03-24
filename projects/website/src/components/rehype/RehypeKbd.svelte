<script>
  export let properties;
</script>

<kbd {...properties}><slot></slot></kbd>

<style>
  kbd {
    background-color: var(--color-subtle-background);
    border-radius: var(--border-radius);
    box-shadow: 0 0 1px var(--color-foreground),
      0 0 0 2px var(--color-background) inset;
    display: inline-block;
    padding: 0 var(--space-s);
    white-space: nowrap;
  }
</style>
