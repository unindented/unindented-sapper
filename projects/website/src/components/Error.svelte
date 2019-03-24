<script>
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<div class="grid-full error">
  <p class="grid-main error-message">{error.message}</p>
  {#if dev && error.stack}
  <div class="grid-full error-stack">
    <pre class="grid-main">{error.stack}</pre>
  </div>
  {/if}
</div>

<style>
  .error {
    margin: var(--space-xl) 0;
  }

  .error-stack {
    background-color: var(--color-subtle-background);
    overflow-x: auto;
  }
</style>
