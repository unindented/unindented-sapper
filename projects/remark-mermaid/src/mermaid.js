const fs = require("fs-extra");
const lodash = require("lodash");
const path = require("path");
const puppeteer = require("puppeteer");
const tmp = require("tmp");
const { promisify } = require("util");

tmp.setGracefulCleanup();

const tmpFile = promisify(tmp.file);

const pageUrl = async () => {
  const scriptPath = `file://${path.resolve(
    require.resolve("mermaid"),
    "../mermaid.min.js"
  )}`;
  const templatePath = path.resolve(__dirname, "mermaid.html");
  const templateContents = await fs.readFile(templatePath, "utf8");
  const tmpTemplatePath = await tmpFile({ postfix: ".html" });
  const tmpTemplateContents = lodash.template(templateContents)({ scriptPath });
  await fs.writeFile(tmpTemplatePath, tmpTemplateContents, "utf8");

  return `file://${tmpTemplatePath}`;
};

const diagramDefinition = process.argv[2];
const diagramId = "xxxxxxxxxxxx".replace(/x/g, () =>
  ((Math.random() * 16) | 0).toString(16)
);

(async () => {
  const browser = await puppeteer.launch();
  let status;

  try {
    const page = await browser.newPage();
    await page.goto(await pageUrl());

    const svg = await page.evaluate(
      (diagramDefinition, diagramId) => {
        window.mermaid.mermaidAPI.initialize({ startOnLoad: false });
        return window.mermaid.mermaidAPI.render(
          `mermaid-${diagramId}`,
          diagramDefinition
        );
      },
      diagramDefinition,
      diagramId
    );
    process.stdout.write(svg);
    status = 0;
  } catch (err) {
    process.stderr.write(err.message);
    status = 1;
  } finally {
    await browser.close();
    process.exit(status);
  }
})();
