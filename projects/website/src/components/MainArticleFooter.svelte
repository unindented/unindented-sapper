<script>
  import { format } from "../utils/date";
  import { email, tweet } from "../utils/link";

  export let author;
  export let date;
  export let slug;
  export let title;
</script>

<footer class="grid-main">
  <div>
    <picture>
      <source type="image/webp" srcset="images/me-256x256.webp" />
      <img src="images/me-256x256.jpg" alt="" />
    </picture>
    <p>
      Posted on <time datetime="{date}">{format(date)}</time> by {author}. Got
      any comments or suggestions? Send me a
      <a
        href="{tweet({ slug, title })}"
        target="_blank"
        rel="nofollow noreferrer"
        >tweet</a
      >
      or an
      <a href="{email({ title })}" target="_blank" rel="nofollow noreferrer"
        >email</a
      >.
    </p>
  </div>
</footer>

<style>
  footer {
    margin-bottom: var(--space-xl);
  }

  div {
    display: flex;
    flex-direction: row;
  }

  picture {
    margin-right: var(--space-m);
  }

  img {
    border: 0.125rem solid #8e99ab;
    border-radius: 50%;
    height: auto;
    width: 3rem;
  }

  p {
    flex: 1;
    font-style: italic;
    margin: 0;
  }

  a {
    color: var(--color-link);
    transition: color 0.1s ease-in-out;
  }

  a:focus,
  a:hover {
    color: var(--color-link-hover);
  }
</style>
