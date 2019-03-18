<script>
  export let type;
  export let tagName;

  $: {
    throw new Error(`Could not render ${type} ${tagName}`);
  }
</script>
