const path = require("path");
const visit = require("unist-util-visit");
const isElement = require("hast-util-is-element");
const replaceExt = require("replace-ext");

const visitor = options => (node, index, parent) => {
  const { src } = node.properties;

  if (!isElement(node, "img") || !parent || !src) {
    return;
  }

  const extension = path.extname(src).slice(1);
  const map = options[extension];

  if (!map) {
    return;
  }

  parent.children[index] = {
    type: "element",
    tagName: "picture",
    properties: {},
    children: sources(node, map).concat(node)
  };
};

const sources = (node, map) => {
  const { src, width, height } = node.properties;

  return Object.keys(map).reduce((acc, key) => {
    acc.push({
      type: "element",
      tagName: "source",
      properties: {
        srcSet: replaceExt(src, `.${key}`),
        type: map[key],
        dataWidth: width,
        dataHeight: height,
        dataPlaceholder: placeholder(node)
      },
      children: []
    });
    return acc;
  }, []);
};

const placeholder = node => {
  const { width, height } = node.properties;
  const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"></svg>`;
  const svg64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${svg64}`;
};

/**
 * Wrap images in pictures.
 */
const picture = (options = {}) => {
  const visitorWithOptions = visitor(options);

  return tree => {
    visit(tree, "element", visitorWithOptions);
  };
};

module.exports = picture;
