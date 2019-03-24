<script>
  import { siteDescription, siteTitle } from "../utils/metadata";

  export let segment;
</script>

<header role="banner" class="grid-full">
  <div class="grid-main">
    <h1><a rel="prefetch" href="/">{siteTitle}</a></h1>
    <h2 class="sr-only">{siteDescription}</h2>

    <nav>
      <ul>
        <li>
          <a rel="prefetch" class="{segment == null ? 'selected' : ''}" href="/"
            >Home</a
          >
        </li>
        <li>
          <a
            rel="prefetch"
            class="{segment === 'blog' ? 'selected' : ''}"
            href="blog/"
            >Blog</a
          >
        </li>
        <li>
          <a
            rel="prefetch"
            class="{segment === 'about' ? 'selected' : ''}"
            href="about/"
            >About</a
          >
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    background-color: var(--color-inverted-background);
    color: var(--color-inverted-foreground);
    min-height: 20vh;
  }

  div {
    align-items: baseline;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  h1 {
    font-size: var(--font-scale-base);
    font-weight: normal;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0 calc(var(--space-s) * -1);
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0 var(--space-s);
  }

  a {
    color: var(--color-inverted-link);
    display: inline-block;
    font-weight: bold;
    margin: var(--space-m) 0 var(--space-s);
    text-decoration: none;
    text-transform: lowercase;
    transition: color 0.1s ease-in-out;
  }

  a:focus,
  a:hover,
  a.selected {
    border-bottom: var(--border-width-l) solid;
  }
</style>
