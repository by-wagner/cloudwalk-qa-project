const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}'
  },
});
