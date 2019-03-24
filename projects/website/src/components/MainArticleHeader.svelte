<header class="grid-full">
  <h1 class="grid-main">
    <slot></slot>
  </h1>
</header>

<style>
  header {
    background-color: var(--color-inverted-background);
    color: var(--color-inverted-foreground);
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
    margin: calc(var(--space-s) * -1) 0 0;
  }
</style>
