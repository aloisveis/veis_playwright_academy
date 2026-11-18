import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test.describe("Test suite - Login Pmtool", () => {
  const username = "pw_academy";
  const password = "Playwright321!"; // normálně neukládat napřímo do testu

  test.beforeEach(async ({ page }) => {
    // před každým testem se otevře stránka loginu
    const loginPage = new LoginPage(page);

    await loginPage.open();
  });

  test("Pmtool Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage
      .fillUsername(username)
      .then((login) => login.fillPassword(password))
      .then((login) => login.clickLogin());
  });

  test("Pmtool Login and Logout", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage
      .login(username, password)
      .then((dashboard) => dashboard.clickProfile())
      .then((dashboard) => dashboard.clickLogout());
  });
});
