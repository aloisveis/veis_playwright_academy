import { Page, Locator } from "@playwright/test";
import { ProjectTasksPage } from "./project_tasks_page.ts";
export class CreateNewProjectModal {
  private readonly page: Page;
  private readonly nameInput: Locator;
  private readonly saveButton: Locator;
  //rivate readonly projectName: string;
  constructor(page: Page) {
    this.page = page;
    this.nameInput = this.page.locator('div[data-testid="Name"] input');
    this.saveButton = this.page.locator('[type="submit"]');
  }
  async fillProjectName(projectName: string) {
    await this.nameInput.fill(projectName);
    return this;
  }
  async clickSaveButton() {
    await this.saveButton.click();
    return new ProjectTasksPage(this.page);
  }
}
