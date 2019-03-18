const stringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");
const markdown = require("remark-parse");
const unified = require("unified");
const mermaid = require(".");

const process = text =>
  new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(mermaid)
      .use(remark2rehype, { allowDangerousHTML: true })
      .use(stringify)
      .process(text, (err, contents) => {
        if (!err) {
          resolve(contents.contents);
        } else {
          reject(err);
        }
      });
  });

describe("remark-mermaid", () => {
  describe("with a valid mermaid block", () => {
    const text = `
\`\`\` mermaid
graph LR;
A-->B;
\`\`\`
`;

    it("replaces it with a diagram", () => {
      return expect(process(text)).resolves.toContain("svg");
    });
  });

  describe("with an invalid mermaid block", () => {
    const text = `
\`\`\` mermaid
graph;
\`\`\`
`;

    it("replaces it with an empty block", () => {
      return expect(process(text)).resolves.toMatchSnapshot();
    });
  });
});
