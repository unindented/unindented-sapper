<script>
  export let properties;
</script>

<li {...properties}><slot></slot></li>

<style>
  li > :global(*) {
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
