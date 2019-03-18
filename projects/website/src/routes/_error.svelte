<script>
  import Error from "../components/Error.svelte";

  export let status;
  export let error;
</script>

<Error {status} {error} />
