const chokidar = require("chokidar");
const path = require("path");
const { readFilesForTypes } = require("./read-files");

const dateRegex = /^(.+)\/(\d{4}-\d{2}-\d{2})-(.+)\/index\.md$/;
const pageRegex = /^(.+)\/index\.md$/;

const dateSorter = ({ date: dateA }, { date: dateB }) =>
  dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
const relatedMap = ({ slug, title, date }) => ({ slug, title, date });
const typeFilter = type => file => file.type === type;
const blogFilter = typeFilter("blog-item");

const cwd = path.resolve(__dirname, "../static");

const types = {
  "home-index": {
    glob: ["index.md"],
    attributes: () => {
      const slug = "home";
      const date = undefined;
      return { slug, date };
    },
    related: allFiles => {
      const relatedFiles = allFiles.filter(blogFilter);
      relatedFiles.sort(dateSorter);
      return relatedFiles.slice(0, 10).map(relatedMap);
    }
  },
  "blog-index": {
    glob: ["blog/index.md"],
    attributes: file => {
      const slug = file.replace(pageRegex, "$1");
      const date = undefined;
      return { slug, date };
    },
    related: allFiles => {
      const relatedFiles = allFiles.filter(blogFilter);
      relatedFiles.sort(dateSorter);
      return relatedFiles.map(relatedMap);
    }
  },
  "blog-item": {
    glob: ["blog/*/*.md"],
    attributes: file => {
      const slug = file.replace(dateRegex, "$1/$3");
      const date = file.replace(dateRegex, "$2");
      return { slug, date };
    }
  },
  "page-item": {
    glob: ["about/**/*.md"],
    attributes: file => {
      const slug = file.replace(pageRegex, "$1");
      const date = undefined;
      return { slug, date };
    }
  },
  "error-404": {
    glob: ["404.md"],
    attributes: () => {
      const slug = "404";
      const date = undefined;
      return { slug, date };
    },
    related: allFiles => {
      const relatedFiles = allFiles.filter(blogFilter);
      relatedFiles.sort(dateSorter);
      return relatedFiles.slice(0, 10).map(relatedMap);
    }
  }
};

const contents = (() => {
  let promise = null;
  let changed = true;

  if (process.env.NODE_ENV === "development") {
    chokidar.watch(cwd, { ignoreInitial: true }).on("all", () => {
      changed = true;
    });
  }

  return () => {
    if (changed) {
      promise = readFilesForTypes({ cwd, types });
      changed = false;
    }

    return promise;
  };
})();

module.exports = contents;
