<script context="module">
  import { requestItem } from "../_client";

  export async function preload() {
    return requestItem(this, "blog");
  }
</script>

<script>
  import MainArticle from "../../components/MainArticle.svelte";
  import MainArticleHeader from "../../components/MainArticleHeader.svelte";
  import MainArticleList from "../../components/MainArticleList.svelte";
  import Rehype from "../../components/rehype/Rehype.svelte";
  import { siteTitle } from "../../utils/metadata";

  export let data;
  $: title = `${data.title} - ${siteTitle}`;
</script>

<MainArticle slug="{data.slug}" {title}>
  <MainArticleHeader>
    {data.title}
  </MainArticleHeader>
  <Rehype node="{data.body}" />
  <MainArticleList items="{data.related}" />
</MainArticle>
