import { test } from "@playwright/test";

test.describe("Handling Iframe", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
    //await page.locator("#name").fill("iFrame"); //?nebude fungovat pokud je provek v iframe
    const frame = page.frameLocator('[data-testid="test-automation-iframe"]'); //? odkazuje na iframe element
    await frame.locator("#name").fill("iFrame");
    await page.locator('[data-testid="new-domain-link"]').click();
  });
});
