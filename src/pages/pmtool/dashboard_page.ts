import { expect, Locator, Page } from "@playwright/test";
export class DashboardPage {
  private readonly page: Page;
  private readonly profileButton: Locator;
  private readonly logoutButton: Locator;
  private readonly notifikactionButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.notifikactionButton = page.locator("#user_notifications_report");
  }
  async clickProfile() {
    await expect(this.notifikactionButton).toBeVisible(); //načtení celé stránky
    await this.profileButton.click();
  }
  async clickLogout() {
    await this.logoutButton.click();
  }
}
