const { connectPuppeteer } = require("@unindented/e2e-jest");
const NodeEnvironment = require("jest-environment-node");

class EndToEndEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    this.global.browser = await connectPuppeteer();
  }

  teardown() {
    return super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = EndToEndEnvironment;
