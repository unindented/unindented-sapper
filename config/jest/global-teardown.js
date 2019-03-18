const { stopPuppeteer, stopServer } = require("@unindented/e2e-jest");

module.exports = async () => {
  await stopPuppeteer(global.__BROWSER__);
  await Promise.all(global.__SERVERS__.map(stopServer));
};
