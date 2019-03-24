<script>
  export let properties;
</script>

<div>
  <iframe {...properties}>
    <p><em>Your browser does not support iframes.</em></p>
  </iframe>
</div>

<style>
  div {
    border: var(--border-width-s) solid var(--color-border);
    border-radius: var(--border-radius);
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
  }

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
