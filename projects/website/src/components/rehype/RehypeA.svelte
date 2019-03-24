<script>
  import { fix, isFragment, isRelative } from "../../utils/path";

  export let properties;

  $: overrides = {
    href: fix(properties.href),
    ...(!isFragment(properties.href) && isRelative(properties.href)
      ? { rel: "prefetch" }
      : {})
  };
</script>

<a {...properties} {...overrides}><slot></slot></a>

<style>
  a {
    color: var(--color-link);
    transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;
  }

  a:focus,
  a:hover {
    color: var(--color-link-hover);
  }
</style>
