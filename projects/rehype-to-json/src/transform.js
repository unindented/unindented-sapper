const json2rehype = require("@unindented/json-to-rehype");
const info = require("property-information");
const stringify = require("rehype-stringify");
const unified = require("unified");

const transforms = [
  [
    node =>
      node.type === "element" &&
      node.tagName === "div" &&
      node.properties.className &&
      (node.properties.className.includes("math") ||
        node.properties.className.includes("inlineMath")),
    node => {
      node.children.unshift({
        type: "element",
        tagName: "link",
        properties: {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.1/katex.min.css",
          integrity:
            "sha384-dbVIfZGuN1Yq7/1Ocstc1lUEm+AT+/rCkibIcC/OmWo5f0EA48Vf8CytHzGrSwbQ",
          crossorigin: "anonymous"
        },
        children: []
      });
    }
  ],
  // Elements like `math` and `svg` can be left as raw nodes.
  [
    node =>
      node.type === "element" &&
      (node.tagName === "math" || node.tagName === "svg"),
    node => {
      convertToRaw(node);
    }
  ],
  [
    node => node.properties,
    node => {
      convertToAttributes(node);
    }
  ],
  [
    undefined,
    node => {
      delete node.position;
    }
  ]
];

const convertToRaw = node => {
  node.value = convertToString(node);
  node.type = "raw";
  delete node.children;
  delete node.properties;
  delete node.tagName;
};

const convertToString = node => {
  const { contents } = unified()
    .use(json2rehype)
    .use(stringify)
    .processSync(JSON.stringify(node));

  return contents;
};

const convertToAttributes = node => {
  node.properties = Object.keys(node.properties).reduce((acc, key) => {
    const { attribute } = info.find(info.html, key);
    acc[attribute] = [].concat(node.properties[key]).join(" ");
    return acc;
  }, {});
};

const transform = node => {
  transforms.forEach(([condition, func]) => {
    if (!condition || !!condition(node)) {
      func(node);
    }
  });
};

module.exports = transform;
