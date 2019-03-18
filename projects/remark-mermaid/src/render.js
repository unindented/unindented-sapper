const spawn = require("cross-spawn");

const render = diagramDefinition =>
  new Promise((resolve, reject) => {
    const mermaid = spawn("mermaid", [diagramDefinition]);
    const stdout = [];
    const stderr = [];

    mermaid.stdout.on("data", data => {
      stdout.push(data);
    });

    mermaid.stderr.on("data", data => {
      stderr.push(data);
    });

    mermaid.on("close", code => {
      if (code === 0) {
        resolve(stdout.join(""));
      } else {
        reject(new Error(stderr.join("")));
      }
    });
  });

module.exports = render;
