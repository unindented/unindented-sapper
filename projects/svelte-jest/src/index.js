const { compile } = require("svelte/compiler");

const process = (src, filename) => {
  const result = compile(src, {
    format: "cjs",
    filename
  });

  return result.js;
};

module.exports = {
  process
};
