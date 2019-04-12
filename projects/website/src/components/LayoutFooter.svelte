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
    background-image: var(--image-background-footer),
      linear-gradient(
        135deg,
        var(--color-accent-background-1) 0%,
        var(--color-accent-background-2) 100%
      );
    background-position: left 10vw top 0, center;
    background-repeat: repeat-x, no-repeat;
    background-size: 100vw, cover;
    color: var(--color-accent-foreground);
    padding-top: var(--space-xxl);
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
