const path = require("path");
const { copyFiles } = require("./copy-files");

const dateRegex = /^(.+)\/(\d{4}-\d{2}-\d{2})-(.*)\/([^/]+)$/;
const pageRegex = /^(.+)\/([^/]+)$/;

const cwd = path.resolve(__dirname, "../static");
const dist = process.argv[2];

const types = {
  blog: {
    glob: ["blog/**/*", "!blog/**/*.md"],
    path: file => file.replace(dateRegex, "$1/$3/$4")
  },
  page: {
    glob: ["about/**/*", "!about/**/*.md"],
    path: file => file.replace(pageRegex, "$1/$2")
  }
};

copyFiles({ cwd, dist, types });
