<script>
  import { onMount } from "svelte";
  import { fix } from "../../utils/path";

  let node;

  export let properties;
  export let children;

  $: src = properties.src ? fix(properties.src) : undefined;
  $: value = children
    ? children.map(({ value }) => value).join("\n")
    : undefined;

  onMount(() => {
    const script = document.createElement("script");
    let timeout;

    // Set `async` flag to `false` so script gets queued and executed in order.
    script.async = false;

    if (src) {
      script.src = src;
      node.replaceChild(script, node.firstChild);
    } else {
      // Avoid inline scripts, as they don't get queued.
      script.src = `data:text/javascript;base64,${btoa(value)}`;
      // Add a timeout, because `onMount` events get triggered in reverse order,
      // and we need src scripts to evaluate first.
      timeout = setTimeout(() => {
        node.replaceChild(script, node.firstChild);
      }, 0);
    }

    return () => {
      clearTimeout(timeout);
    };
  });
</script>

<div hidden bind:this="{node}">
  <p><em>Your browser does not allow this site to run JavaScript.</em></p>
</div>
