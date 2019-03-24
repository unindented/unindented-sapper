<script>
  export let properties;
</script>

<td {...properties}><slot></slot></td>

<style>
  td {
    padding: 0 var(--space-s);
    text-align: center;
    white-space: nowrap;
  }
</style>
