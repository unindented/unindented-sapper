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
    background-color: var(--color-accent-background-1);
    background-image: linear-gradient(
      135deg,
      var(--color-blue-90) 0%,
      var(--color-purple-80) 100%
    );
    color: var(--color-accent-foreground);
    text-align: center;
  }

  a {
    color: var(--color-accent-link);
    transition: color 0.1s ease-in-out;
  }

  a:focus,
  a:hover {
    color: var(--color-accent-link-hover);
  }
</style>
