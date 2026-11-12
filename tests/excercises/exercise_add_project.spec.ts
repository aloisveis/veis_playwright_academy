import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { faker } from "@faker-js/faker";

test("Create New Project Test: Login to PMTool, Create New Project and Logout", async ({
  page,
}) => {
  const projectName =
    "test_ject_" + faker.number.int({ min: 10, max: 10_000_000 });
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.fillUsername("pw_academy"))
    .then((login) => login.fillPassword("Playwright321!"))
    .then((login) => login.clickLogin())
    .then((dashboard) => dashboard.clickProjects())
    .then((projects) => projects.clickAddProject())
    .then((createProjectModal) =>
      createProjectModal.fillProjectName(projectName),
    )
    .then((createProjectModal) => createProjectModal.clickSaveButton())
    .then((tasks) => tasks.clickProfile());
});
