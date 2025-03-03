const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1920,
    viewportHeight: 180,
    watchForFileChanges: false,
    spectPattern: 'cypress/e2e/**/*.feature',

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});
