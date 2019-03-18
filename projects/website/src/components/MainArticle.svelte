<script>
  import { setContext } from "svelte";
  import { format } from "../utils/date";
  import { siteTitle } from "../utils/metadata";
  import { email, tweet } from "../utils/link";
  import Rehype from "./rehype/Rehype.svelte";

  export let data;

  setContext("rehype", { slug: () => data.slug });
</script>

<svelte:head>
  <title>{data.title} - {siteTitle}</title>
</svelte:head>

<article>
  <header>
    <h1>{data.title}</h1>
  </header>

  <Rehype node="{data.body}" />

  {#if data.author}
  <footer>
    <div>
      <div>
        <picture>
          <source type="image/webp" srcset="images/me-256x256.webp" />
          <img src="images/me-256x256.jpg" alt="" />
        </picture>
      </div>
      <p>
        Posted on {format(data.date)} by {data.author}. Got any comments or
        suggestions? Send me a
        <a href="{tweet(data)}" target="_blank" rel="nofollow noreferrer"
          >tweet</a
        >
        or an
        <a href="{email(data)}" target="_blank" rel="nofollow noreferrer"
          >email</a
        >.
      </p>
    </div>
  </footer>
  {/if}
</article>
