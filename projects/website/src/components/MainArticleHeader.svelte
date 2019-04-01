<script>
  let scrollY;
  let headerHeight;
</script>

<svelte:window bind:scrollY="{scrollY}" />

<header class="grid-full" bind:clientHeight="{headerHeight}">
  <h1
    class="grid-main"
    style="opacity: {1 - Math.max(0, (scrollY / headerHeight) || 0)}"
  >
    <slot></slot>
  </h1>
</header>

<style>
  header {
    background-color: var(--color-accent-background-1);
    background-image: linear-gradient(
      135deg,
      var(--color-blue-90) 0%,
      var(--color-purple-80) 100%
    );
    color: var(--color-accent-foreground);
    text-align: center;
    text-transform: lowercase;
  }

  h1 {
    align-items: flex-end;
    display: flex;
    font-size: calc(
      (var(--fluid-hero-min-font-size) * 1px) +
        (var(--fluid-hero-max-font-size) - var(--fluid-hero-min-font-size)) *
        (100vw - (var(--fluid-min-screen-size) * 1px)) /
        (var(--fluid-max-screen-size) - var(--fluid-min-screen-size))
    );
    -webkit-hyphens: auto;
    hyphens: auto;
    justify-content: center;
    line-height: 1.05;
    margin: calc(20vh - var(--space-xs)) 0 0;
  }
</style>
