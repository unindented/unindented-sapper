<script>
  export let data;
</script>

<ul>
  {#each data.related as item}
  <li>
    <a rel="prefetch" href="{item.slug}/">{item.title}</a>
  </li>
  {/each}
</ul>
