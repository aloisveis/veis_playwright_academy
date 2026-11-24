import { expect, test } from "@playwright/test";

test.describe("Mouse Actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/webtrain/web-actions.html");
  });

  test("Mouse Hover", async ({ page }) => {
    await page.locator('[data-testid="hover-box"]').hover();
  });

  test("Drag and Drop", async ({ page }) => {
    const draggable = page.locator('[id="drag1"]');
    const dropZone = page.locator('[id="drop1"]');
    await dropZone.scrollIntoViewIfNeeded();
    await draggable.dragTo(dropZone);
    await expect(page.locator('[id="dropped-message"]')).toBeVisible();
  });

  test("Double Click", async ({ page }) => {
    await page.locator('[data-testid="double-click-box"]').dblclick();
    await expect(
      page.locator('[data-testid="double-click-box"]'),
    ).toContainClass("action-active");
  });

  test("Click and Hold", async ({ page }) => {
    const holdingButton = page.locator(".hold-button");
    const holdPromise = holdingButton.click({ delay: 2000 });
    await expect(holdingButton).toContainText("Holding");
    await holdPromise;
  });
});
