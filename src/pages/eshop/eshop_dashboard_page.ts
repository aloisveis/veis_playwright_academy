import { Locator, Page } from "@playwright/test";
export class EshopDashboardPage {
  private readonly page: Page;
  private readonly url: string;
  private readonly searchField: Locator;
  private readonly searchButton: Locator;
  private readonly productDetail: Locator;
  private readonly productCartAdd: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/eshop";
    this.searchField = page.locator('[name="search"]');
    this.searchButton = page.locator('#search [type="button"]');
    this.productDetail = page.locator('//a[text()="iPhone"]');
    this.productCartAdd = page.locator("#button-cart");
  }
  async open() {
    await this.page.goto(this.url);
  }
  async fillSearchField(searchTerm: string) {
    await this.searchField.fill(searchTerm);
  }
  async clickSearchButton() {
    await this.searchButton.click();
  }
  async clickProductDetail() {
    await this.productDetail.click();
  }
  async clickProductCartAdd() {
    await this.productCartAdd.click();
  }
}
