<script>
  import { fix } from "../../utils/path";

  export let properties;

  $: srcset = fix(properties.srcset);
</script>

<source {...properties} srcset="{srcset}" />
