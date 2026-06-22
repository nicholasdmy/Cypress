const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'veigt2',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
