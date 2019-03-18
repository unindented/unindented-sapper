module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: ["<rootDir>/config/", "/node_modules/"],
  displayName: "test",
  rootDir: "../..",
  setupFilesAfterEnv: ["<rootDir>/config/jest/test-setup.js"],
  testEnvironment: "jsdom",
  testRegex: "/projects/[^/]+/src/.+\\.test\\.js$",
  transform: {
    "^.+\\.svelte$": "@unindented/svelte-jest"
  }
};
