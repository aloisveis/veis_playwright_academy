import { Page, Locator, expect } from "@playwright/test";
import { LoginPage } from "../login_page.ts";
export class ProjectTasksPage {
  private readonly page: Page;
  private readonly profileButton: Locator;
  private readonly logoutButton: Locator;
  private readonly notificationButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.notificationButton = page.locator("#user_notifications_report");
  }
  async clickProfile() {
    await expect(this.notificationButton).toBeVisible();
    await this.profileButton.click();
    return this;
  }

  async clickLogout() {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }

  async logout() {
    await this.clickProfile();
    await this.clickLogout();
    return new LoginPage(this.page);
  }
}
