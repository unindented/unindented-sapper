<script>
  export let properties;
</script>

<ol {...properties}>
  <slot></slot>
</ol>

<style>
  ol {
    padding-left: var(--space-l);
    padding-right: 0;
  }
</style>
