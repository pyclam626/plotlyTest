const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  projectId: '7uw2jx',
  pageLoadTimeout: 100000,
  retries: 3,
  viewportWidth: 1600,
  viewportHeight: 1400,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
