<script>
  export let properties;
</script>

<canvas {...properties}><slot></slot></canvas>

<style>
  canvas {
    border: var(--border-width-s) solid var(--color-border);
    border-radius: var(--border-radius);
    display: block;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    overflow: hidden;
  }
</style>
