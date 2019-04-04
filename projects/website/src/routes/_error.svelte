<script>
  import Error from "../components/Error.svelte";
  import MainArticle from "../components/MainArticle.svelte";
  import MainArticleHeader from "../components/MainArticleHeader.svelte";

  export let status;
  export let error;
</script>

<MainArticle slug="{status}" title="{status}">
  <MainArticleHeader>
    {status}
  </MainArticleHeader>
  <Error {status} {error} />
</MainArticle>
