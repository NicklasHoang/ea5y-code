const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        specPattern: "cypress/tests/**/*.cy.js",
        screenshotOnRunFailure: true,
        browser: "chrome",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
