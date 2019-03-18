jest.setTimeout(10000);

describe("navigation", () => {
  let page;

  beforeAll(async () => {
    page = await browser.newPage();

    page.on("console", msg => {
      console.log(`${msg.type()}: ${msg.text()}`);
    });

    await page.goto("http://localhost:3001");
  });

  afterAll(async () => {
    await page.close();
  });

  describe("landing on `home`", () => {
    beforeAll(async () => {
      await page.waitFor(250);
    });

    it("displays the right title", async () => {
      const title = await page.title();
      expect(title).toBe("Unindented");
    });

    it("displays the right heading", async () => {
      const selector = "main h1";
      await page.waitFor(selector);
      const heading = await page.$eval(selector, el => el.textContent);
      expect(heading).toBe("Latest articles");
    });
  });

  describe("clicking on `blog`", () => {
    beforeAll(async () => {
      const selector = "nav a[href='blog/']";
      await page.waitFor(selector);
      const link = await page.$(selector);
      await link.click();

      await page.waitFor(250);
    });

    it("displays the right title", async () => {
      const title = await page.title();
      expect(title).toBe("Blog - Unindented");
    });

    it("displays the right heading", async () => {
      const selector = "main h1";
      await page.waitFor(selector);
      const heading = await page.$eval(selector, el => el.textContent);
      expect(heading).toBe("Blog");
    });
  });

  describe("clicking on `about`", () => {
    beforeAll(async () => {
      const selector = "nav a[href='about/']";
      await page.waitFor(selector);
      const link = await page.$(selector);
      await link.click();

      await page.waitFor(250);
    });

    it("displays the right title", async () => {
      const title = await page.title();
      expect(title).toBe("About - Unindented");
    });

    it("displays the right heading", async () => {
      const selector = "main h1";
      await page.waitFor(selector);
      const heading = await page.$eval(selector, el => el.textContent);
      expect(heading).toBe("About");
    });
  });
});
