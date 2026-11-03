import { type Locator, type Page } from "@playwright/test";

export class PmToolLoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator('[type="submit"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.goto("https://tredgate.com/pmtool/");
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
