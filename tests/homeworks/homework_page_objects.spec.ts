import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { EshopDashboardPage } from "../../src/pages/tredgate-eshop/eshop_dashboard_page.ts";
test("Page Object Test: Eshop - Register user", async ({ page }) => {
  const eshopDashboardPage = new EshopDashboardPage(page);
  const randomEmail = faker.internet.email();
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomTelephone = faker.phone.number({ style: "international" });
  const randomPassword = faker.internet.password({
    length: 10,
    memorable: true,
  });
  await eshopDashboardPage
    .open()
    .then((dashboard) => dashboard.clickAccountButton())
    .then((dashboard) => dashboard.clickRegisterButton())
    .then((register) => register.fillFirstName(randomFirstName))
    .then((register) => register.fillLastName(randomLastName))
    .then((register) => register.fillEmail(randomEmail))
    .then((register) => register.fillTelephone(randomTelephone))
    .then((register) => register.fillPassword(randomPassword))
    .then((register) => register.fillPasswordConfirm(randomPassword))
    .then((register) => register.clickContinue());
});
