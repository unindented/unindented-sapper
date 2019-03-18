const english = require("retext-english");
const smartypants = require("retext-smartypants");
const stringify = require("retext-stringify");
const unified = require("unified");
const visit = require("unist-util-visit");

const visitor = options => node => {
  const newValue = unified()
    .use(english)
    .use(smartypants, options)
    .use(stringify)
    .processSync(node.value);

  node.value = String(newValue);

  return node;
};

/**
 * Reimplement `retext-smartypants` in `remark` land, as we can't go back from `retext` to `remark`.
 */
const smarty = (options = {}) => {
  const visitorWithOptions = visitor(options);

  return tree => {
    visit(tree, "text", visitorWithOptions);
  };
};

module.exports = smarty;
