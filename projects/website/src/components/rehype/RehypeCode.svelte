<script>
  export let properties;
</script>

<code {...properties}><slot></slot></code>

<style>
  code {
    background-color: var(--color-subtle-background);
    border-radius: var(--border-radius);
    display: inline-block;
    padding: 0 var(--space-xs);
  }
</style>
