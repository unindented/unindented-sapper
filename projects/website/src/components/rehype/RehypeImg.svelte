<script>
  import { fix } from "../../utils/path";

  export let properties;

  $: src = fix(properties.src);
</script>

<img {...properties} src="{src}" />

<style>
  img {
    border: var(--border-width-s) solid var(--color-border);
    border-radius: var(--border-radius);
    display: block;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    overflow: hidden;
  }
</style>
