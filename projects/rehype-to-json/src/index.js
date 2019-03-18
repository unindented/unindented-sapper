const visit = require("unist-util-visit");
const transform = require("./transform");

const getRootNode = node => {
  return {
    type: "element",
    tagName: "div",
    properties: { className: "rehype" },
    children: node.children
  };
};

const visitor = node => {
  transform(node);

  return node;
};

/**
 * Serialize a `rehype` tree to JSON.
 */
function rehype2json() {
  this.Compiler = node => {
    const rootNode = getRootNode(node);
    visit(rootNode, visitor);
    return rootNode;
  };
}

module.exports = rehype2json;
