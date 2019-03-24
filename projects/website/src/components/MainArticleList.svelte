<script>
  import { format } from "../utils/date";

  export let items;
</script>

<ul class="grid-full">
  {#each items as item}
  <li class="grid-main">
    <a rel="prefetch" href="{item.slug}/">{item.title}</a>
    <time datetime="{item.date}">{format(item.date)}</time>
  </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    margin: 0 0 var(--space-xl);
    padding: 0;
  }

  ul > :first-child {
    margin-top: 0;
  }

  ul > :last-child {
    margin-bottom: 0;
  }

  li {
    display: block;
    margin: var(--space-m) 0;
    text-transform: lowercase;
  }

  a {
    color: var(--color-link);
    display: block;
    font-size: calc(var(--font-scale-1) * 1rem);
    font-weight: bolder;
    line-height: 1.05;
    margin-bottom: var(--space-s);
    transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;
    text-decoration: none;
  }

  a:focus,
  a:hover {
    color: var(--color-link-hover);
  }

  time {
    display: block;
  }
</style>
