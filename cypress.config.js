const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "multibank-qa",
  cores: 2,
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://trade.mb.io",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",

    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    taskTimeout: 10000,

    waitForAnimations: true,

    retries: {
      runMode: 1,
      openMode: 0,
    },

    video: true,
    videoOnFailOnly: true,
    screenshotOnRunFailure: true,

    viewportWidth: 1280,
    viewportHeight: 720,

    env: {
      TARGET_PROFILE: "app",
      APP_BASE_URL: "https://trade.mb.io",
      MARKETING_BASE_URL: "https://multibank.io",
    },

    setupNodeEvents(on, config) {
      return config;
    },
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "report",
    reportTitle: "MultiBank QA Automation Test Report",
    html: true,
    json: true,
    overwrite: false,
    timestamp: "longDate",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});
