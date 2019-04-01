<script>
  export let properties;
</script>

<mark {...properties}><slot></slot></mark>

<style>
  mark {
    background-color: var(--color-accent-background-1);
    color: var(--color-accent-foreground);
  }
</style>
