import { Locator, Page } from "@playwright/test";
export class EshopRegisterPage {
  private readonly page: Page;
  private readonly url: string;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly telephoneInput: Locator;
  private readonly passwordInput: Locator;
  private readonly passwordConfirmInput: Locator;
  private readonly continueButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/eshop/index.php?route=account/register";
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }
  async open() {
    await this.page.goto(this.url);
    return this;
  }
  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
    return this;
  }
  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
    return this;
  }
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }
  async fillTelephone(telephone: string) {
    await this.telephoneInput.fill(telephone);
    return this;
  }
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }
  async fillPasswordConfirm(passwordConfirm: string) {
    await this.passwordConfirmInput.fill(passwordConfirm);
    return this;
  }
  async clickContinue() {
    await this.continueButton.click();
    return this;
  }
}
