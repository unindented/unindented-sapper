<script>
  import { fix } from "../../utils/path";

  export let properties;

  $: href = fix(properties.href);
</script>

<link {...properties} href="{href}" />
