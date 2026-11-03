import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly url: "https://tredgate.com/pmtool"; // ? Použijeme jen na prvním PO (LoginPage), odkud budeme PMTool otevírat;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly resetPasswordLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[type="submit"]');
    this.resetPasswordLink = page.locator("#forget_password");
  }
  // Při vytváření metod doporučím přístup začít s atomickými (malými) metodami s jedním krokem a pak vytvářet sdružující metody
  // Například: typeUsername - jeden krok, login - sdružení více kroků
  // Atomické metody používáme, když danou funkcionalitu testujeme a sdružující metody například pro preconditions jiných testů

  async open() {
    await this.page.goto(this.url);
  }
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }
  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
  async clickResetPassword() {
    await this.resetPasswordLink.click();
  }
}
