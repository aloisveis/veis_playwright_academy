import { test } from "@playwright/test";

test("First Test", async ({ page }) => {
  await page.goto(
    "https://automationteststore.com/index.php?rt=account/create",
  );
  await page.locator("#AccountFrm_firstname").fill("Jmeno");
  await page.locator("#AccountFrm_lastname").fill("Prijmeni");
  await page.locator('[title="Continue"]').click();
});
