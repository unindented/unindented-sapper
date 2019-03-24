<script>
  import { setContext } from "svelte";

  export let title;
  export let slug;

  setContext("rehype", { slug: () => slug });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article class="grid-full">
  <slot></slot>
</article>

<style>
  article {
    grid-template-rows: min-content auto;
  }
</style>
