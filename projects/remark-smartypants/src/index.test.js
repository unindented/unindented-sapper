const stringify = require("rehype-stringify");
const remark2rehype = require("remark-rehype");
const markdown = require("remark-parse");
const unified = require("unified");
const smartypants = require(".");

const process = (text, options) =>
  new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(smartypants, options)
      .use(remark2rehype)
      .use(stringify)
      .process(text, (err, contents) => {
        if (!err) {
          resolve(contents.contents);
        } else {
          reject(err);
        }
      });
  });

describe("remark-smartypants", () => {
  it("converts quotes to smart quotes", () => {
    const text = `
John said, "I saw Lucy at lunch, she told me 'Mary wants you to get some ice cream on your way home'. I think I will get some at Ben and Jerry's, on Gloucester Road."
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("converts two dashes to an en-dash", () => {
    const text = `
Community-associated Methicillin-Resistant *Staphylococcus aureus* in Outpatients, United States, 1999--2006
`;
    return expect(
      process(text, { dashes: "oldschool" })
    ).resolves.toMatchSnapshot();
  });

  it("converts three dashes to an em-dash", () => {
    const text = `
> Proper words in proper places make the true definition of a style.
>
> --- Jonathan Swift
`;
    return expect(
      process(text, { dashes: "oldschool" })
    ).resolves.toMatchSnapshot();
  });
});
