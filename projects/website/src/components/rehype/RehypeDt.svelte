<script>
  export let properties;
</script>

<dt {...properties}><slot></slot></dt>

<style>
  dt {
    font-weight: bolder;
  }
</style>
