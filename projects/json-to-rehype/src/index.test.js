const stringify = require("rehype-stringify");
const unified = require("unified");
const json2rehype = require(".");

const process = text =>
  new Promise((resolve, reject) => {
    unified()
      .use(json2rehype)
      .use(stringify)
      .process(text, (err, file) => {
        if (!err) {
          resolve(file.contents);
        } else {
          reject(err);
        }
      });
  });

describe("json-to-rehype", () => {
  describe("with valid json", () => {
    const json = {
      type: "element",
      tagName: "div",
      properties: { className: "rehype" },
      children: [
        {
          type: "element",
          tagName: "h1",
          properties: {},
          children: [{ type: "text", value: "Header 1" }]
        },
        { type: "text", value: "\n" },
        {
          type: "element",
          tagName: "h2",
          properties: {},
          children: [{ type: "text", value: "Header 2" }]
        },
        { type: "text", value: "\n" },
        {
          type: "element",
          tagName: "p",
          properties: {},
          children: [
            {
              type: "text",
              value: "The quick brown fox jumped over the lazy\ndog's back."
            }
          ]
        },
        { type: "text", value: "\n" },
        {
          type: "element",
          tagName: "h3",
          properties: {},
          children: [{ type: "text", value: "Header 3" }]
        },
        { type: "text", value: "\n" },
        {
          type: "element",
          tagName: "blockquote",
          properties: {},
          children: [
            { type: "text", value: "\n" },
            {
              type: "element",
              tagName: "p",
              properties: {},
              children: [{ type: "text", value: "This is a blockquote." }]
            },
            { type: "text", value: "\n" },
            {
              type: "element",
              tagName: "p",
              properties: {},
              children: [
                {
                  type: "text",
                  value: "This is the second paragraph in the blockquote."
                }
              ]
            },
            { type: "text", value: "\n" }
          ]
        }
      ]
    };

    it("returns a rehype tree from a json string", () => {
      return expect(process(JSON.stringify(json))).resolves.toMatchSnapshot();
    });
  });

  describe("with invalid json", () => {
    beforeEach(() => {
      jest.spyOn(console, "error").mockImplementation(() => {});
    });

    it("returns a fallback rehype tree", () => {
      return expect(process("")).resolves.toMatchSnapshot();
    });
  });
});
