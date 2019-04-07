<script>
  import { fix } from "../../utils/path";

  export let properties;

  $: srcset = fix(properties.srcset);
</script>

<source
  {...properties}
  data-srcset="{srcset}"
  srcset="{properties['data-placeholder']}"
/>
