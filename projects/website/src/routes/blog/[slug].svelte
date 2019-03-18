<script context="module">
  import { requestItem } from "../_client";

  export async function preload({ params }) {
    return requestItem(this, `blog/${params.slug}`);
  }
</script>

<script>
  import MainArticle from "../../components/MainArticle.svelte";

  export let data;
</script>

<MainArticle {data} />
