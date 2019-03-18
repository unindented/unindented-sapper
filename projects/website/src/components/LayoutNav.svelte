<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a
        rel="prefetch"
        class="{segment === undefined ? 'selected' : ''}"
        href="/"
        >Home</a
      >
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'about' ? 'selected' : ''}"
        href="about/"
        >About</a
      >
    </li>
    <li>
      <a
        rel="prefetch"
        class="{segment === 'blog' ? 'selected' : ''}"
        href="blog/"
        >Blog</a
      >
    </li>
  </ul>
</nav>
