<script>
  export let properties;
</script>

<thead {...properties}>
  <slot></slot>
</thead>

<style>
  thead {
    border-bottom: var(--border-width-s) solid var(--color-border);
  }

  thead :global(th) {
    font-weight: bolder;
    line-height: 2.25rem;
  }
</style>
