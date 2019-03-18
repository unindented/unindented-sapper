<script context="module">
  import { requestItem } from "../_client";

  export async function preload() {
    return requestItem(this, "blog");
  }
</script>

<script>
  import MainIndex from "../../components/MainIndex.svelte";

  export let data;
</script>

<MainIndex {data} />
