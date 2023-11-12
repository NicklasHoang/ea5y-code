const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Google Search", function () {
    this.timeout(10000);

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("should open Google and check the title", async function () {
        await driver.get("https://www.google.com");
        const title = await driver.getTitle();
        assert.strictEqual(title, "Google");
    });
});
