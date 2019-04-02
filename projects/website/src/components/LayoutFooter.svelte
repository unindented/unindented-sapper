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
    background-image: url("data:image/svg+xml,%3Csvg width='640' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M640 5V0H0v5c58.272 0 101.728 20 160 20 58.272 0 101.728-20 160-20 58.272 0 101.728 20 160 20 58.272 0 101.728-20 160-20z' fill='%23fff'/%3E%3C/svg%3E"),
      linear-gradient(
        135deg,
        var(--color-blue-90) 0%,
        var(--color-purple-80) 100%
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
