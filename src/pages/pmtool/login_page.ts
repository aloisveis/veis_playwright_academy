import { Locator, Page } from "@playwright/test";
import { LostPasswordPage } from "./lost_password_page.ts";
import { DashboardPage } from "./dashboard_page.ts";

export class LoginPage {
  private readonly page: Page;
  private readonly url: "https://tredgate.com/pmtool"; // ? Použijeme jen na prvním PO (LoginPage), odkud budeme PMTool otevírat;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly resetPasswordLink: Locator;
  private readonly passwordForgottenButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[type="submit"]');
    this.resetPasswordLink = page.locator("#forget_password");
    this.passwordForgottenButton = page.locator("#password_forgotten");
  }
  // Při vytváření metod doporučím přístup začít s atomickými (malými) metodami s jedním krokem a pak vytvářet sdružující metody
  // Například: typeUsername - jeden krok, login - sdružení více kroků
  // Atomické metody používáme, když danou funkcionalitu testujeme a sdružující metody například pro preconditions jiných testů

  async open(): Promise<this> {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin() {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
    return new DashboardPage(this.page);
  }

  async clickPasswordForgotten() {
    await this.passwordForgottenButton.click();
    return new LostPasswordPage(this.page);
  }
}
