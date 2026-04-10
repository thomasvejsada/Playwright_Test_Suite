import { Page, expect } from '@playwright/test';

export class BoardPage {
  constructor(private page: Page) {}

  async selectProject(project: string) {
    await this.page.click(`text=${project}`);
  }

  getTaskCard(task: string) {
    return this.page.locator('[class*="bg-white"]').filter({
      has: this.page.locator(`text=${task}`)
    }).first();
  }

  async verifyTask(task: string) {
    await expect(this.getTaskCard(task)).toBeVisible();
  }

  async verifyTags(task: string, tags: string[]) {
    const card = this.getTaskCard(task);

    for (const tag of tags) {
      await expect(card.getByText(tag, { exact: true })).toBeVisible();
    }
  }
}