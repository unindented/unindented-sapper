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
