const raw = require("rehype-raw");
const remark2rehype = require("remark-rehype");
const markdown = require("remark-parse");
const unified = require("unified");
const rehype2json = require(".");

const process = text =>
  new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(remark2rehype, { allowDangerousHTML: true })
      .use(raw)
      .use(rehype2json)
      .process(text, (err, file) => {
        if (!err) {
          resolve(file.contents);
        } else {
          reject(err);
        }
      });
  });

describe("rehype-to-json", () => {
  const text = `
Header 1
========

Header 2
--------

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.

This is an SVG:

<svg xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" height="100" width="100" />
</svg>

This is a math block:

<div class="math katex">
  <math>
    <semantics>
      <mrow><mi mathvariant="normal">∞</mi></mrow>
      <annotation encoding="application/x-tex">{\\infty}</annotation>
    </semantics>
  </math>
</div>

This is some inline math: <span class="inlineMath katex">
  <math>
    <semantics>
      <mrow><mi mathvariant="normal">∞</mi></mrow>
      <annotation encoding="application/x-tex">{\\infty}</annotation>
    </semantics>
  </math>
</span>
`;

  it("returns json from a rehype tree", () => {
    return expect(process(text)).resolves.toMatchSnapshot();
  });
});
