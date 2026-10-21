import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
  await page.goto('https://ultimateqa.com/automation');
  //expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Practice | Ultimate QA/);
  await page.waitForTimeout(10000);
  await page.getByRole('link', { name: 'Big page with many elements' }).click();
  await page.waitForTimeout(10000);
});