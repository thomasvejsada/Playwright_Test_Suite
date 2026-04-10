import { test } from '@playwright/test';
import testData from '../data/testData.json';
import { LoginPage } from '../pages/loginPage';
import { BoardPage } from '../pages/boardPage';

test.describe('Data Driven Task Validation', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', 'password123');
  });

  testData.forEach((data, index) => {
    test(`Test Case ${index + 1} - ${data.task}`, async ({ page }) => {
      const boardPage = new BoardPage(page);

      await boardPage.selectProject(data.project);
      await boardPage.verifyTask(data.task);
      await boardPage.verifyTags(data.task, data.tags);
    });
  });

});