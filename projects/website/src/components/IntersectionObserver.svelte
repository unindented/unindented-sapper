<script>
  import { onMount } from "svelte";

  export let once = false;
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;

  let intersecting = false;
  let node;

  onMount(() => {
    if ("IntersectionObserver" in window) {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

      const observer = new IntersectionObserver(
        entries => {
          const [entry] = entries;
          intersecting = entry.isIntersecting;

          if (intersecting && once) {
            observer.unobserve(node);
          }
        },
        { rootMargin }
      );

      observer.observe(node);
      return () => observer.unobserve(node);
    }

    const handler = () => {
      const rect = node.getBoundingClientRect();

      intersecting =
        rect.top - top < window.innerHeight &&
        rect.bottom + bottom > 0 &&
        rect.left - left < window.innerWidth &&
        rect.right + right > 0;

      if (intersecting && once) {
        window.removeEventListener("scroll", handler);
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });
</script>

<div bind:this="{node}">
  <slot {intersecting}></slot>
</div>
