<script>
  export let properties;
</script>

<tfoot {...properties}>
  <slot></slot>
</tfoot>

<style>
  tfoot {
    border-top: var(--border-width-s) solid var(--color-border);
  }

  tfoot :global(td) {
    font-weight: bolder;
    line-height: 2.25rem;
  }
</style>
