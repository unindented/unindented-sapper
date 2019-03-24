<script>
  export let properties;
</script>

<tbody {...properties}>
  <slot></slot>
</tbody>

<style>
  tbody :global(tr):nth-child(2n + 1) {
    background-color: var(--color-subtle-background);
  }
</style>
