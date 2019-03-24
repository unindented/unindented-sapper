<script>
  import { authorName } from "../utils/metadata";
  import LayoutFeeds from "./LayoutFeeds.svelte";
</script>

<footer role="contentinfo">
  <p>
    All content by
    <a rel="prefetch" href="about/">{authorName}</a>
    unless otherwise noted.
    <a href="https://creativecommons.org/licenses/by-sa/4.0/"
      >Some rights reserved</a
    >.
  </p>

  <LayoutFeeds />
</footer>
