<script>
  export let properties;
</script>

<th {...properties}><slot></slot></th>

<style>
  th {
    padding: 0 var(--space-s);
    text-align: center;
    white-space: nowrap;
  }
</style>
