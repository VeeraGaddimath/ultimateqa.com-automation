import { test, expect } from '@playwright/test';

const Links_To_Test = ['Big page with many elements',
  'Fake Landing Page',
  'Fake Pricing Page',
  'Fill out forms',
  'Learn how to automate an application that evolves over time',
  'Login automation',
  'Interactions with simple elements'];

test('Automate clicking each practice link, navigating, and returning', async ({ page }) => {
  await page.goto('https://ultimateqa.com/automation');

  for (const linkText of Links_To_Test) {
    await page.getByRole('link', { name: linkText }).click();
    await page.waitForLoadState('domcontentloaded');
    await page.goBack();
  }
  await expect(page).toHaveTitle(/Automation Practice | Ultimate QA/);
  console.log('All links have been clicked and navigated back successfully.');
});