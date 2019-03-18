const markdown2html = require(".");

describe("markdown-to-html", () => {
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
`;

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  it("converts markdown to an html rehype tree", async () => {
    const result = await markdown2html("blog/example", text);
    return expect(result).toMatchSnapshot();
  });
});
