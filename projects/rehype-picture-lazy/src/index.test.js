const raw = require("rehype-raw");
const stringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");
const markdown = require("remark-parse");
const unified = require("unified");
const picture = require(".");

const process = (text, options) =>
  new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(remark2rehype, { allowDangerousHTML: true })
      .use(raw)
      .use(picture, options)
      .use(stringify)
      .process(text, (err, contents) => {
        if (!err) {
          resolve(contents.contents);
        } else {
          reject(err);
        }
      });
  });

describe("remark-picture-lazy", () => {
  it("leaves image alone if not configured", () => {
    const text = `
Here's an image:

<img src="foo.png" alt="Some image" width="640" height="480" />
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("wraps image in picture if configured", () => {
    const text = `
Here's another image:

<img src="foo.png" alt="Some image" width="640" height="480" />
`;
    return expect(
      process(text, { png: { webp: "image/webp" } })
    ).resolves.toMatchSnapshot();
  });
});
