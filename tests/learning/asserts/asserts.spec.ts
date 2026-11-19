import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../../src/pages/pmtool/dashboard_page.ts";

test.describe("Asserts - Testing with Playwrights", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage
      .open()
      .then((login) => login.login("pw_academy", "Playwright321!"));
  });

  test("toContainText Assert", async ({ page }) => {
    const dashboardHeader = page.locator("#welcome-page-header");
    await expect(
      dashboardHeader,
      "Dashboard header should contain the expected text",
    ).toContainText("Vítej v testovací aplikaci"); //text v uvozovkách v expectu se zobrazí v reportu,text v uvozovkách v toContainText je očekávaný text, který se má nacházet v elementu
  });

  test("toHaveText Assert", async ({ page }) => {
    const dashboardHeader = page.locator("#welcome-page-header");
    await expect(
      dashboardHeader,
      "[Expect] Dashboard Title Has Text",
    ).toHaveText("Vítej v testovací aplikaci Tredgate Project");
  });

  test("toBeVisible Assert", async ({ page }) => {
    const pageLogo = page.locator(".logo img");
    await expect(pageLogo, "Page Logo is Visible").toBeVisible();
  });

  test("toHaveValue Assert", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const searchValue = "TEST";

    await dashboardPage.clickProjects();

    const searchInput = page.locator('input[test_id="search_input"]');
    await searchInput.fill(searchValue);
    await expect(searchInput, "Search input has Value").toHaveValue(
      searchValue,
    );
  });

  /*   test("Soft Assert", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const dashboardHeader = page.locator("#welcome-page-header");

    // ! Následující assert je neúspěšný, pokud toto vadí v CICD, skipni tento test pomocí test.skip
    await expect
      .soft(dashboardHeader, "[SOFT] Dashboard Title has Text")
      .toHaveText("Vítej");

    await dashboardPage.clickProfile();
  }); */
  test("Negative Asserts", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.logout();

    const errorDiv = page.locator(".alert");
    const usernameInput = page.locator("#username");
    // * Positivní assert zde děláme z toho důvodu, aby následující negativní assert nebyl pass ještě před načtením login page.
    await expect(usernameInput, "[WAIT] Username is displayed").toBeVisible();
    await expect(
      errorDiv,
      "[NEG] Error div is not displayed",
    ).not.toBeVisible();
  });
});

test("Page Objects Asserts", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open().then((login) => login.checkPageHeaderText("Login"));
});
