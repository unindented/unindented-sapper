<script>
  import { setContext } from "svelte";
  import MainRelated from "./MainRelated.svelte";
  import { siteTitle } from "../utils/metadata";

  export let data;

  setContext("rehype", { slug: () => data.slug });
</script>

<svelte:head>
  <title>{data.title} - {siteTitle}</title>
</svelte:head>

<article>
  <header>
    <h1>{data.title}</h1>
  </header>

  <MainRelated {data} />
</article>
