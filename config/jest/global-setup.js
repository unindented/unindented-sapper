const { resolve } = require("path");
const { startPuppeteer, startServer } = require("@unindented/e2e-jest");

const servers = [
  {
    port: 3001,
    path: resolve(__dirname, "../../projects/website/__sapper__/export")
  }
];

module.exports = async () => {
  global.__SERVERS__ = await Promise.all(servers.map(startServer));
  global.__BROWSER__ = await startPuppeteer();
};
