<script>
  export let properties;
</script>

<div class="grid-full">
  <pre class="grid-main" {...properties}><slot></slot></pre>
</div>

<style>
  div {
    background-color: var(--color-subtle-background);
    overflow-x: auto;
  }

  pre :global(code) {
    background-color: transparent;
    display: block;
    padding: 0;
  }

  pre :global(.hljs-comment),
  pre :global(.hljs-quote) {
    color: var(--color-code-comment);
    font-style: italic;
  }

  pre :global(.hljs-keyword),
  pre :global(.hljs-selector-tag),
  pre :global(.hljs-subst) {
    color: var(--color-code-keyword);
    font-weight: bold;
  }

  pre :global(.hljs-number),
  pre :global(.hljs-literal),
  pre :global(.hljs-variable),
  pre :global(.hljs-template-variable),
  pre :global(.hljs-tag .hljs-attr) {
    color: var(--color-code-number);
  }

  pre :global(.hljs-string),
  pre :global(.hljs-doctag) {
    color: var(--color-code-string);
  }

  pre :global(.hljs-title),
  pre :global(.hljs-section),
  pre :global(.hljs-selector-id) {
    color: var(--color-code-title);
    font-weight: bold;
  }

  pre :global(.hljs-subst) {
    font-weight: normal;
  }

  pre :global(.hljs-type),
  pre :global(.hljs-class .hljs-title) {
    color: var(--color-code-type);
    font-weight: bold;
  }

  pre :global(.hljs-tag),
  pre :global(.hljs-name),
  pre :global(.hljs-attribute) {
    color: var(--color-code-tag);
    font-weight: normal;
  }

  pre :global(.hljs-regexp),
  pre :global(.hljs-link) {
    color: var(--color-code-regexp);
  }

  pre :global(.hljs-symbol),
  pre :global(.hljs-bullet) {
    color: var(--color-code-symbol);
  }

  pre :global(.hljs-built_in),
  pre :global(.hljs-builtin-name) {
    color: var(--color-code-built-in);
  }

  pre :global(.hljs-meta) {
    color: var(--color-code-meta);
    font-weight: bold;
  }

  pre :global(.hljs-addition) {
    background: var(--color-code-addition);
  }

  pre :global(.hljs-deletion) {
    background: var(--color-code-deletion);
  }

  pre :global(.hljs-emphasis) {
    font-style: italic;
  }

  pre :global(.hljs-strong) {
    font-weight: bold;
  }
</style>
