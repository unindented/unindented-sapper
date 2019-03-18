const stringify = require("rehype-stringify");
const processor = require("./process-markdown");

const process = text =>
  new Promise((resolve, reject) => {
    processor()
      .use(stringify)
      .process(text, (err, contents) => {
        if (!err) {
          resolve(contents.contents);
        } else {
          reject(err);
        }
      });
  });

describe("markdown", () => {
  it("processes mermaid blocks", () => {
    const text = `
\`\`\` mermaid
graph LR;
A-->B;
\`\`\`
`;
    return expect(process(text)).resolves.toContain("svg");
  });

  it("converts quotes to smart quotes", () => {
    const text = `
John said, "I saw Lucy at lunch, she told me 'Mary wants you to get some ice cream on your way home'. I think I will get some at Ben and Jerry's, on Gloucester Road."
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes abbreviations", () => {
    const text = `
Get the latest news from the [BBC](https://www.bbc.co.uk/) in Stoke and Staffs.

*[BBC]: British Broadcasting Corporation
*[Staffs]: Staffordshire
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes youtube iframes", () => {
    const text = `
!(https://www.youtube.com/watch?v=dQw4w9WgXcQ)
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes keyboard keys", () => {
    const text = `
To take a screenshot on your Mac, press ||Cmd|| + ||Shift|| + ||3||.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes superscript and subscript text", () => {
    const text = `
Chemical formulas are written using subscripts (e.g. C~6~H~12~O~6~), but atomic isotopes are written using superscripts (e.g. ^13^C, ^131^I, and ^238^U).
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes tables", () => {
    const text = `
+---+---+
| A | B |
+---+---+
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes math blocks", () => {
    const text = `
$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes inline math blocks", () => {
    const text = `
In analytical mathematics, _Euler's identity_ is the equality $e^{i\\pi} + 1 = 0$.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("processes code blocks", () => {
    const text = `
\`\`\`javascript
console.log('Hello, world!')
\`\`\`
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("adds webp alternative to png images", () => {
    const text = `
<img src="logo.png" alt="Logo" />
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("adds fragment links to headings", () => {
    const text = `
# First-Level Header

## Second-Level Header

### Third-Level Header
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });
});
