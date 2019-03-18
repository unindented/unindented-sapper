<script>
  import { siteTitle, siteDescription } from "../utils/metadata";
  import LayoutNav from "./LayoutNav.svelte";

  export let segment;
</script>

<header role="banner">
  <h1><a href="/">{siteTitle}</a></h1>
  <h2>{siteDescription}</h2>

  <LayoutNav {segment} />
</header>
