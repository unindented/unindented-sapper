<script>
  export let properties;
</script>

<dd {...properties}><slot></slot></dd>

<style>
  dd {
    margin-left: var(--space-l);
    margin-right: 0;
  }
</style>
