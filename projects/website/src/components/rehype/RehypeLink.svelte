<script>
  import { fix } from "../../utils/path";
  import IntersectionObserver from "../IntersectionObserver.svelte";

  export let properties;

  $: href = fix(properties.href);
</script>

<IntersectionObserver top="{100}" bottom="{25}" once let:intersecting>
  {#if intersecting}
  <link {...properties} href="{href}" />
  {/if}
</IntersectionObserver>
