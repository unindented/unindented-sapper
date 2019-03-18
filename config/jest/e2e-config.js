module.exports = {
  displayName: "e2e",
  globalSetup: "<rootDir>/config/jest/global-setup.js",
  globalTeardown: "<rootDir>/config/jest/global-teardown.js",
  rootDir: "../..",
  setupFilesAfterEnv: ["<rootDir>/config/jest/e2e-setup.js"],
  testEnvironment: "<rootDir>/config/jest/e2e-environment.js",
  testRegex: "/projects/[^/]+/e2e/.+\\.e2e\\.js$"
};
