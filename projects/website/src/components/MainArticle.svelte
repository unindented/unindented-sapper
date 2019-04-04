<script>
  import { setContext } from "svelte";
  import {
    authorName,
    siteDescription,
    siteTitle,
    siteUrl
  } from "../utils/metadata";

  export let title;
  export let slug;

  setContext("rehype", { slug: () => slug });

  $: headTitle =
    slug === "home"
      ? `${siteTitle} - ${siteDescription}`
      : `${title} - ${siteTitle}`;
  $: headDescription =
    slug.indexOf("/") === -1 ? siteDescription : `Article by ${authorName}`;

  $: ogUrl = `${siteUrl}/${slug === "home" ? "" : slug + "/"}`;
  $: ogType = slug === "home" ? "website" : "article";
  $: ogTitle = slug === "home" ? siteTitle : title;
  $: ogDescription =
    slug.indexOf("/") === -1 ? siteDescription : `Article by ${authorName}`;
</script>

<svelte:head>
  <title>{headTitle}</title>
  <meta name="description" content="{headDescription}" />

  <meta property="og:url" content="{ogUrl}" />
  <meta property="og:type" content="{ogType}" />
  <meta property="og:title" content="{ogTitle}" />
  <meta property="og:description" content="{ogDescription}" />
  <meta property="og:image" content="{siteUrl}/images/me-512x512.jpg" />
</svelte:head>

<article class="grid-full">
  <slot></slot>
</article>

<style>
  article {
    grid-template-rows: min-content auto;
  }
</style>
