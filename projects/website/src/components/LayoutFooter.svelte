<script>
  import { authorName } from "../utils/metadata";
</script>

<footer role="contentinfo" class="grid-full">
  <div class="grid-main">
    <p>
      All content by
      <a rel="prefetch" href="about/">{authorName}</a>
      unless otherwise noted.
      <a href="https://creativecommons.org/licenses/by-sa/4.0/"
        >Some rights reserved</a
      >.
    </p>
  </div>
</footer>

<style>
  footer {
    background-color: var(--color-inverted-background);
    color: var(--color-inverted-foreground);
    text-align: center;
  }

  a {
    color: var(--color-inverted-link);
    transition: color 0.1s ease-in-out;
  }

  a:focus,
  a:hover {
    color: var(--color-inverted-link-hover);
  }
</style>
