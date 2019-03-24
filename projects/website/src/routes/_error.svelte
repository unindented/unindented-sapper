<script>
  import Error from "../components/Error.svelte";
  import MainArticle from "../components/MainArticle.svelte";
  import MainArticleHeader from "../components/MainArticleHeader.svelte";
  import { siteTitle } from "../utils/metadata";

  export let status;
  export let error;
  $: title = `${status} - ${siteTitle}`;
</script>

<MainArticle slug="{status}" {title}>
  <MainArticleHeader>
    {status}
  </MainArticleHeader>
  <Error {status} {error} />
</MainArticle>
