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
    background-image: url("data:image/svg+xml,%3Csvg width='640' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M640 20v5H0v-5C58.272 20 101.728 0 160 0c58.272 0 101.728 20 160 20 58.272 0 101.728-20 160-20 58.272 0 101.728 20 160 20z' fill='%23fff'/%3E%3C/svg%3E"),
      linear-gradient(
        135deg,
        var(--color-blue-90) 0%,
        var(--color-purple-80) 100%
      );
    background-position: left -10vw bottom 0, center;
    background-repeat: repeat-x, no-repeat;
    background-size: 100vw, cover;
    color: var(--color-accent-foreground);
    padding-bottom: var(--space-xl);
    text-align: center;
    text-transform: lowercase;
  }

  header::after {
    background-color: var(--color-background);
    content: "";
    height: var(--border-width-s);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
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
