import { test } from "@playwright/test";
import { EshopDashboardPage } from "../../src/pages/eshop/eshop_dashboard_page";

test("Page Object Test: Add product to cart", async ({ page }) => {
  const eshopDashboardPage = new EshopDashboardPage(page);
  await eshopDashboardPage.open();
  await eshopDashboardPage.fillSearchField("iPhone");
  await eshopDashboardPage.clickSearchButton();
  await eshopDashboardPage.clickProductDetail();
  await eshopDashboardPage.clickProductCartAdd();
});
