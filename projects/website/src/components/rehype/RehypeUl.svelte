<script>
  export let properties;
</script>

<ul {...properties}>
  <slot></slot>
</ul>

<style>
  ul {
    padding-left: var(--space-l);
    padding-right: 0;
  }
</style>
