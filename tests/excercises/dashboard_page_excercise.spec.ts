import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../src/pages/pmtool/dashboard_page.ts";

test("Page Object Test: Login to PMTool and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
});
