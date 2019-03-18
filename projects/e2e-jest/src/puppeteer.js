const puppeteer = require("puppeteer");

const startPuppeteer = async () => {
  const headless = !process.env.DEBUG;
  const browser = await puppeteer.launch({ headless });
  process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
  return browser;
};

const stopPuppeteer = async browser => {
  await browser.close();
};

const connectPuppeteer = () => {
  return puppeteer.connect({
    browserWSEndpoint: process.env.PUPPETEER_WS_ENDPOINT
  });
};

module.exports = {
  startPuppeteer,
  stopPuppeteer,
  connectPuppeteer
};
