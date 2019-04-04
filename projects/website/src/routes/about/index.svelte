<script context="module">
  import { requestItem } from "../_client";

  export async function preload() {
    return requestItem(this, "about");
  }
</script>

<script>
  import MainArticle from "../../components/MainArticle.svelte";
  import MainArticleHeader from "../../components/MainArticleHeader.svelte";
  import Rehype from "../../components/rehype/Rehype.svelte";

  export let data;
</script>

<MainArticle slug="{data.slug}" title="{data.title}">
  <MainArticleHeader>
    {data.title}
  </MainArticleHeader>
  <Rehype node="{data.body}" />
</MainArticle>
