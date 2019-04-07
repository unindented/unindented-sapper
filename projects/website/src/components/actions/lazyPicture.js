const lazyPicture = node => {
  let top = 100;
  let bottom = 25;
  let left = 0;
  let right = 0;

  if ("IntersectionObserver" in window) {
    const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        const { isIntersecting: intersecting } = entry;

        if (intersecting) {
          transferData(node);
          observer.unobserve(node);
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }

  const handler = () => {
    const rect = node.getBoundingClientRect();

    const intersecting =
      rect.top - top < window.innerHeight &&
      rect.bottom + bottom > 0 &&
      rect.left - left < window.innerWidth &&
      rect.right + right > 0;

    if (intersecting) {
      transferData(node);
      window.removeEventListener("scroll", handler);
    }
  };

  window.addEventListener("scroll", handler);

  return {
    destroy() {
      window.removeEventListener("scroll", handler);
    }
  };
};

const transferData = node => {
  node.querySelectorAll("source").forEach(source => {
    source.srcset = source.dataset.srcset;
  });
};

export default lazyPicture;
