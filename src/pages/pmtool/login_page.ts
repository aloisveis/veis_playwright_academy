import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly url: "https://tredgate.com/pmtool"; // ? Použijeme jen na prvním PO (LoginPage), odkud budeme PMTool otevírat;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[type="submit"]');
  }
}
