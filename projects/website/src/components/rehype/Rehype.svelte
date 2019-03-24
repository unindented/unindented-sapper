<script>
  import RehypeError from "./RehypeError.svelte";
  import RehypeA from "./RehypeA.svelte";
  import RehypeAbbr from "./RehypeAbbr.svelte";
  import RehypeB from "./RehypeB.svelte";
  import RehypeBlockquote from "./RehypeBlockquote.svelte";
  import RehypeBr from "./RehypeBr.svelte";
  import RehypeCanvas from "./RehypeCanvas.svelte";
  import RehypeCite from "./RehypeCite.svelte";
  import RehypeCode from "./RehypeCode.svelte";
  import RehypeDd from "./RehypeDd.svelte";
  import RehypeDel from "./RehypeDel.svelte";
  import RehypeDetails from "./RehypeDetails.svelte";
  import RehypeDfn from "./RehypeDfn.svelte";
  import RehypeDiv from "./RehypeDiv.svelte";
  import RehypeDl from "./RehypeDl.svelte";
  import RehypeDt from "./RehypeDt.svelte";
  import RehypeEm from "./RehypeEm.svelte";
  import RehypeFigure from "./RehypeFigure.svelte";
  import RehypeH1 from "./RehypeH1.svelte";
  import RehypeH2 from "./RehypeH2.svelte";
  import RehypeH3 from "./RehypeH3.svelte";
  import RehypeH4 from "./RehypeH4.svelte";
  import RehypeH5 from "./RehypeH5.svelte";
  import RehypeH6 from "./RehypeH6.svelte";
  import RehypeHr from "./RehypeHr.svelte";
  import RehypeI from "./RehypeI.svelte";
  import RehypeIframe from "./RehypeIframe.svelte";
  import RehypeImg from "./RehypeImg.svelte";
  import RehypeIns from "./RehypeIns.svelte";
  import RehypeKbd from "./RehypeKbd.svelte";
  import RehypeLi from "./RehypeLi.svelte";
  import RehypeLink from "./RehypeLink.svelte";
  import RehypeMark from "./RehypeMark.svelte";
  import RehypeOl from "./RehypeOl.svelte";
  import RehypeP from "./RehypeP.svelte";
  import RehypePicture from "./RehypePicture.svelte";
  import RehypePre from "./RehypePre.svelte";
  import RehypeQ from "./RehypeQ.svelte";
  import RehypeSamp from "./RehypeSamp.svelte";
  import RehypeScript from "./RehypeScript.svelte";
  import RehypeSmall from "./RehypeSmall.svelte";
  import RehypeSource from "./RehypeSource.svelte";
  import RehypeSpan from "./RehypeSpan.svelte";
  import RehypeStrong from "./RehypeStrong.svelte";
  import RehypeSub from "./RehypeSub.svelte";
  import RehypeSummary from "./RehypeSummary.svelte";
  import RehypeSup from "./RehypeSup.svelte";
  import RehypeTable from "./RehypeTable.svelte";
  import RehypeTbody from "./RehypeTbody.svelte";
  import RehypeTd from "./RehypeTd.svelte";
  import RehypeTfoot from "./RehypeTfoot.svelte";
  import RehypeTh from "./RehypeTh.svelte";
  import RehypeThead from "./RehypeThead.svelte";
  import RehypeTime from "./RehypeTime.svelte";
  import RehypeTr from "./RehypeTr.svelte";
  import RehypeUl from "./RehypeUl.svelte";
  import RehypeVar from "./RehypeVar.svelte";

  const elements = {
    a: RehypeA,
    abbr: RehypeAbbr,
    b: RehypeB,
    blockquote: RehypeBlockquote,
    br: RehypeBr,
    canvas: RehypeCanvas,
    cite: RehypeCite,
    code: RehypeCode,
    dd: RehypeDd,
    del: RehypeDel,
    details: RehypeDetails,
    dfn: RehypeDfn,
    div: RehypeDiv,
    dl: RehypeDl,
    dt: RehypeDt,
    em: RehypeEm,
    figure: RehypeFigure,
    h1: RehypeH1,
    h2: RehypeH2,
    h3: RehypeH3,
    h4: RehypeH4,
    h5: RehypeH5,
    h6: RehypeH6,
    hr: RehypeHr,
    i: RehypeI,
    iframe: RehypeIframe,
    img: RehypeImg,
    ins: RehypeIns,
    kbd: RehypeKbd,
    li: RehypeLi,
    link: RehypeLink,
    mark: RehypeMark,
    ol: RehypeOl,
    p: RehypeP,
    picture: RehypePicture,
    pre: RehypePre,
    q: RehypeQ,
    samp: RehypeSamp,
    script: RehypeScript,
    small: RehypeSmall,
    source: RehypeSource,
    span: RehypeSpan,
    strong: RehypeStrong,
    sub: RehypeSub,
    summary: RehypeSummary,
    sup: RehypeSup,
    table: RehypeTable,
    tbody: RehypeTbody,
    td: RehypeTd,
    tfoot: RehypeTfoot,
    th: RehypeTh,
    thead: RehypeThead,
    time: RehypeTime,
    tr: RehypeTr,
    ul: RehypeUl,
    var: RehypeVar
  };

  export let node;
</script>

{#if node.type === "element"}<!--
--><svelte:component this="{elements[node.tagName] || RehypeError}" {...node}
  ><!--
  -->{#each node.children as child}<!--
  --><svelte:self node="{child}" /><!--
  -->{/each}<!--
--></svelte:component
><!--
-->{:else if node.type === "raw"}<!--
-->{@html node.value}<!--
-->{:else if node.type === "text"}<!--
-->{node.value}<!--
-->{:else}<!--
--><RehypeError {...node} /><!--
-->{/if}

<style>
  :global(.rehype) {
    display: inherit;
    grid-column: full;
    grid-template-columns: inherit;
    margin: var(--space-xl) 0;
  }

  :global(.rehype > *) {
    grid-column: main;
    margin: var(--space-s) 0;
  }

  :global(.rehype) > :first-child {
    margin-top: 0;
  }

  :global(.math),
  :global(.mermaid) {
    background-color: var(--color-subtle-background);
    display: inherit;
    grid-column: full !important;
    grid-template-columns: inherit;
    overflow-x: auto;
  }

  :global(.math > *),
  :global(.mermaid > *) {
    grid-column: main;
  }

  :global(.mermaid > svg) {
    font-family: inherit !important;
    height: auto;
    margin: var(--space-m) 0;
    max-width: 100% !important;
    width: 100%;
  }
</style>
