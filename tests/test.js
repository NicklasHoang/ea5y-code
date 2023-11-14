const puppeteer = require("puppeteer");
const assert = require("assert");

describe("Google Search", function () {
    this.timeout(10000);

    let browser;
    let page;

    beforeEach(async function () {
        browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        page = await browser.newPage();
    });

    afterEach(async function () {
        await browser.close();
    });

    it("should open Google and check the title", async function () {
        await page.goto("https://www.google.com");
        const title = await page.title();
        assert.strictEqual(title, "Google");
    });
});
