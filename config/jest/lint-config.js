module.exports = {
  displayName: "lint",
  rootDir: "../..",
  runner: "jest-runner-eslint",
  testRegex: "/projects/[^/]+/.+\\.(js|svelte)$"
};
