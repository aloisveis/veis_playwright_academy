import { Page, Locator } from "@playwright/test";
import { CreateNewProjectModal } from "./projects/create_new_project_modal.ts";
export class ProjectsPage {
  private readonly page: Page;
  private readonly url: string;
  private readonly addProjectButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = "https://tredgate.com/pmtool/projects/1/tasks";
    this.addProjectButton = this.page.locator('[test_id="Add Project"]');
  }
  async clickAddProject() {
    await this.addProjectButton.click();
    return new CreateNewProjectModal(this.page);
  }
}
