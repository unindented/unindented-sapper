<script>
  import lazyPicture from "../actions/lazyPicture";

  export let properties;
</script>

<picture use:lazyPicture {...properties}><slot></slot></picture>
