const fallbackNode = {
  type: "element",
  tagName: "div",
  properties: { className: "root" },
  children: []
};

/**
 * Deserialize a `rehype` tree from a JSON string.
 */
function json2rehype() {
  this.Parser = str => {
    try {
      return JSON.parse(str);
    } catch (err) {
      console.error(err);
      return fallbackNode;
    }
  };
}

module.exports = json2rehype;
