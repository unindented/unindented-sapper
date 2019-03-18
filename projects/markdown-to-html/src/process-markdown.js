const mermaid = require("@unindented/remark-mermaid");
const smartypants = require("@unindented/remark-smartypants");
const link = require("rehype-autolink-headings");
const highlight = require("rehype-highlight");
const katex = require("rehype-katex");
const picture = require("rehype-picture");
const raw = require("rehype-raw");
const slug = require("rehype-slug");
const abbr = require("remark-abbr");
const table = require("remark-grid-tables");
const iframe = require("remark-iframes");
const kbd = require("remark-kbd");
const math = require("remark-math");
const markdown = require("remark-parse");
const remark2rehype = require("remark-rehype");
const remark2retext = require("remark-retext");
const subsuper = require("remark-sub-super");
const unified = require("unified");
const text = require("./process-text");

const processor = unified()
  .use(markdown)
  .use(mermaid)
  .use(smartypants, { dashes: "oldschool" })
  .use(remark2retext, text)
  .use(abbr)
  .use(iframe, {
    "www.youtube.com": {
      tag: "iframe",
      width: 560,
      height: 315,
      disabled: false,
      replace: [["watch?v=", "embed/"], ["https://"]],
      thumbnail: {
        format: "https://img.youtube.com/vi/{id}/0.jpg",
        id: ".+/(.+)$"
      },
      removeAfter: "&"
    }
  })
  .use(kbd)
  .use(subsuper)
  .use(table)
  .use(math)
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(highlight, { subset: false })
  .use(katex)
  .use(picture, {
    png: { webp: "image/webp" }
  })
  .use(slug)
  .use(link, {
    behavior: "append",
    properties: {
      className: "hash"
    },
    content: {
      type: "text",
      value: "#"
    }
  });

module.exports = processor;
