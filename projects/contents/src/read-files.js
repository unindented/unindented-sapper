const glob = require("fast-glob");
const frontmatter = require("front-matter");
const fs = require("fs-extra");
const path = require("path");

const readFile = async file => {
  const contents = await fs.readFile(file);

  return frontmatter(contents.toString());
};

const readFilesForType = async ({ cwd, types, key }) => {
  const type = types[key];
  const files = await glob(type.glob, { cwd });

  return Promise.all(
    files.map(async file => {
      const { attributes, body } = await readFile(path.resolve(cwd, file));
      const moreAttributes = type.attributes(file);

      return {
        ...attributes,
        ...moreAttributes,
        type: key,
        body
      };
    })
  );
};

const readFilesForTypes = async ({ cwd, types }) => {
  const files = await Object.keys(types).reduce(async (acc, key) => {
    const filesForType = readFilesForType({ cwd, types, key });

    return [...(await acc), ...(await filesForType)];
  }, []);

  return files.reduce((acc, file) => {
    const { related } = types[file.type];

    acc[file.slug] = {
      ...file,
      related: related && related(files)
    };

    return acc;
  }, {});
};

module.exports = {
  readFile,
  readFilesForType,
  readFilesForTypes
};
