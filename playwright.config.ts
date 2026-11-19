import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  timeout: 60_000, //?timeout pro maximální dobu běhu testu, defaultně je 30s
  globalTimeout: 1 * 60 * 60 * 1000, //? Timeout na dobu běhu všech testů. Zápis je udělaný pomocí násobků časových jednotek pro lepši čitelnost (h * m * s * ms)
  expect: {
    timeout: 7_000, // ? Maximální doba čekání v assertu v ms.
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 7_000, // ? Nastavení maximální doby akcí (například click nebo fill) v ms.
    navigationTimeout: 30_000, // ? Maximální doba trvání metody page.goto() v ms.
    screenshot: "only-on-failure", // ? při pádu testu se uloží screenshot, který se dá zobrazit v reportu
    // video: "only-on-failure", // ? při pádu testu se uloží video, které se dá zobrazit v reportu
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure", // ? při pádu testu se uloží a drží trace, který se dá zobrazit v reportu
  },

  /* Configure projects for major browsers */
  projects: [
    /*     {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    }, */

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    /*     {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
 */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
