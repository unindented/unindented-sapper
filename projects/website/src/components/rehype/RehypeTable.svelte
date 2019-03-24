<script>
  export let properties;
</script>

<div>
  <table {...properties}>
    <slot></slot>
  </table>
</div>

<style>
  div {
    border: var(--border-width-s) solid var(--color-border);
    border-radius: var(--border-radius);
    overflow-x: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
</style>
