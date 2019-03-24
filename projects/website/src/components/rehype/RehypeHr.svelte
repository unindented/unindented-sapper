<script>
  export let properties;
</script>

<hr {...properties} />

<style>
  hr {
    border: 0;
    color: var(--color-border);
    height: 1.5rem;
    text-align: center;
  }

  hr:after {
    content: "***";
    letter-spacing: 1rem;
    vertical-align: middle;
  }
</style>
