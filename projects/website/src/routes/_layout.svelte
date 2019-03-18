<script>
  import LayoutFooter from "../components/LayoutFooter.svelte";
  import LayoutHeader from "../components/LayoutHeader.svelte";
  import {
    siteDescription,
    themeColor,
    backgroundColor
  } from "../utils/metadata";

  export let segment;
</script>

<svelte:head>
  <meta name="description" content="{siteDescription}" />
  <meta name="theme-color" content="{themeColor}" />
  <meta name="background-color" content="{backgroundColor}" />
</svelte:head>

<LayoutHeader {segment} />

<main id="main"><slot></slot></main>

<LayoutFooter />
