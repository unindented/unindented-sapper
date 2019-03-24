<script context="module">
  import { requestItem } from "../_client";

  export async function preload({ params }) {
    return requestItem(this, `blog/${params.slug}`);
  }
</script>

<script>
  import MainArticle from "../../components/MainArticle.svelte";
  import MainArticleFooter from "../../components/MainArticleFooter.svelte";
  import MainArticleHeader from "../../components/MainArticleHeader.svelte";
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
  <MainArticleFooter
    author="{data.author}"
    date="{data.date}"
    slug="{data.slug}"
    title="{data.title}"
  />
</MainArticle>
