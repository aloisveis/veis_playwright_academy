import { Locator, Page } from "@playwright/test";
import { EshopRegisterPage } from "./eshop_register_page";
export class EshopDashboardPage {
  private readonly page: Page;
  private readonly url: string;
  private readonly searchField: Locator;
  private readonly searchButton: Locator;
  private readonly productDetail: Locator;
  private readonly productCartAdd: Locator;
  private readonly accontButton: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/eshop";
    this.searchField = page.locator('[name="search"]');
    this.searchButton = page.locator('#search [type="button"]');
    this.productDetail = page.locator('//a[text()="iPhone"]');
    this.productCartAdd = page.locator("#button-cart");
    this.accontButton = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      'a[href="https://tredgate.com/eshop/index.php?route=account/register"]',
    );
  }
  async open() {
    await this.page.goto(this.url);
    return this;
  }
  async fillSearchField(searchTerm: string) {
    await this.searchField.fill(searchTerm);
    return this;
  }
  async clickSearchButton() {
    await this.searchButton.click();
    return this;
  }
  async clickProductDetail() {
    await this.productDetail.click();
    return this;
  }
  async clickProductCartAdd() {
    await this.productCartAdd.click();
    return this;
  }
  async clickAccountButton() {
    await this.accontButton.click();
    return this;
  }
  async clickRegisterButton() {
    await this.registerButton.click();
    return new EshopRegisterPage(this.page);
  }
}
