const visit = require("unist-util-visit");
const render = require("./render");

const mermaidNode = svg => ({
  type: "html",
  value: `<div class="mermaid">${svg}</div>`
});

const visitDiagram = async (tree, file) => {
  const nodes = [];

  visit(tree, "code", (node, index, parent) => {
    const { lang } = node;

    if (lang !== "mermaid") {
      return node;
    }

    nodes.push([node, index, parent]);

    return node;
  });

  if (!nodes.length) {
    return tree;
  }

  return Promise.all(
    nodes.map(async ([node, index, parent]) => {
      const { position, value } = node;

      try {
        const svg = await render(value);
        parent.children.splice(index, 1, mermaidNode(svg));
      } catch (err) {
        parent.children.splice(index, 1, mermaidNode(""));
        file.message(err.message, position, "mermaid");
      }

      return node;
    })
  );
};

/**
 * Processes `mermaid` code blocks and turns them into SVG diagrams.
 */
const mermaid = () => {
  return async (tree, file, next) => {
    try {
      await visitDiagram(tree, file);
    } catch (err) {
      // no-op
    }

    // istanbul ignore else
    if (typeof next === "function") {
      return next(null, tree, file);
    } else {
      return tree;
    }
  };
};

module.exports = mermaid;
