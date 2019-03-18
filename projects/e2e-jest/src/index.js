const puppeteer = require("./puppeteer");
const server = require("./server");

module.exports = {
  ...puppeteer,
  ...server
};
