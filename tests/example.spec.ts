import { test, expect } from '@playwright/test';

const linksToTest = [
  'Big page with many elements',
  'Fake Landing Page',
  'Fake Pricing Page',
  'Fill out forms',
  'Learn how to automate an application that evolves over time',
  'Login automation',
  'Interactions with simple elements',
  'Services',
  'Projects',
  'Case Studies',
];

test.describe('Ultimate QA Automation Practice Tests', () => {
  test.describe.configure({ mode: 'serial' });

  test('Test 1: Automate clicking each practice link, navigating, and returning', async ({ page }) => {
    await page.goto('https://ultimateqa.com/automation');

    for (const linkText of linksToTest) {
      await page.getByRole('link', { name: linkText }).click({ timeout: 10000 });
      await page.waitForLoadState('networkidle');
      await page.goBack();
    }
    await expect(page).toHaveTitle(/Automation Practice | Ultimate QA/);
    console.log('All links have been clicked and navigated back successfully.');
  });

  test('Test 2: Click Schedule a Free Discovery Session button and verify navigation', async ({ page }) => {
    await page.goto('https://ultimateqa.com/automation');
    const scheduleButton = page.getByRole('link', { name: 'Free Strategy Session' });
    await scheduleButton.click({ timeout: 10000 });
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Form/);
    console.log('Successfully navigated to the discovery session page.');
    const userName = page.getByRole('textbox', { name: '0-1/firstname' });
    await userName.fill('John Doe');
    const emailInput = page.getByRole('textbox', { name: '0-1/email' });
    await emailInput.fill('john.doe@example.com');
    const roleInput = page.getByRole('textbox',{name: '0-1/role'});
    await roleInput.fill('Software Engineer');
    const companyInput = page.getByRole('textbox', { name: '0-2/name' });
    await companyInput.fill('Tech Solutions Inc.');
  });
});