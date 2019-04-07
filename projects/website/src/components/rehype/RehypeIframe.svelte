<script>
  import IntersectionObserver from "../IntersectionObserver.svelte";

  export let properties;
</script>

<IntersectionObserver top="{100}" bottom="{25}" once let:intersecting>
  {#if intersecting}
  <div>
    <iframe {...properties}>
      <p><em>Your browser does not support iframes.</em></p>
    </iframe>
  </div>
  {/if}
</IntersectionObserver>

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
