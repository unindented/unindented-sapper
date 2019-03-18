const path = require("path");

const glob = require("fast-glob");
const { copy } = require("fs-extra");

const copyFiles = ({ cwd, dist, types }) => {
  Object.keys(types).forEach(async key => {
    const type = types[key];
    const files = await glob(type.glob, { cwd });

    files.forEach(async file => {
      try {
        const distPath = path.resolve(dist, type.path(file));
        await copy(path.resolve(cwd, file), distPath);
      } catch (err) {
        console.error(err);
      }
    });
  });
};

module.exports = {
  copyFiles
};
