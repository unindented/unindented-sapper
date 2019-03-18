const rehype2json = require("@unindented/rehype-to-json");
const colors = require("kleur");
const report = require("vfile-reporter");
const markdown = require("./process-markdown");

const markdown2html = (slug, body) =>
  new Promise((resolve, reject) => {
    markdown()
      .use(rehype2json)
      .process(body, (err, file) => {
        console.log(colors.bold(`> ${slug}`));
        console.log(report(err || file));

        // istanbul ignore else
        if (!err) {
          resolve(file.contents);
        } else {
          reject(err);
        }
      });
  });

module.exports = markdown2html;
