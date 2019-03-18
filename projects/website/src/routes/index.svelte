<script context="module">
  import { requestItem } from "./_client";

  export async function preload() {
    return requestItem(this, "home");
  }
</script>

<script>
  import MainHome from "../components/MainHome.svelte";

  export let data;
</script>

<MainHome {data} />
