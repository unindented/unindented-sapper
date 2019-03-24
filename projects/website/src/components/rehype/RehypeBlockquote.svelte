<script>
  export let properties;
</script>

<blockquote {...properties}><slot></slot></blockquote>

<style>
  blockquote {
    border-left: var(--border-width-l) solid var(--color-border);
    border-right: 0;
    font-style: italic;
    margin-left: 0;
    margin-right: 0;
    padding-left: calc(var(--space-l) - var(--space-xs));
    padding-right: 0;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }
</style>
