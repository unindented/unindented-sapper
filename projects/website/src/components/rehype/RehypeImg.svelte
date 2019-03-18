<script>
  import { fix } from "../../utils/path";

  export let properties;

  $: src = fix(properties.src);
</script>

<img {...properties} src="{src}" />
