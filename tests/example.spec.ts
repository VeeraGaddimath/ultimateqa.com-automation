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
    await page.getByRole('textbox', { name: 'Name*', exact: true }).click();
    await page.getByRole('textbox', { name: 'Name*', exact: true }).fill('Elon Musk');
    await page.getByRole('textbox', { name: 'Email*' }).click();
    await page.getByRole('textbox', { name: 'Email*' }).fill('elonmusk@spacex.com');
    await page.getByRole('textbox', { name: 'Role*' }).click();
    await page.getByRole('textbox', { name: 'Role*' }).fill('CEO');
    await page.getByRole('textbox', { name: 'Company name*' }).click();
    await page.getByRole('textbox', { name: 'Company name*' }).fill('Spacex ');
    await page.getByRole('combobox', { name: 'How can UltimateQA elevate' }).click();
    await page.getByRole('option', { name: 'Something else' }).click();
    await page.getByRole('textbox', { name: 'Message*' }).click();
    await page.getByRole('textbox', { name: 'Message*' }).fill('Universal Basic income');
    //await page.locator('iframe[name="a-78i64abp0idm"]').contentFrame().getByText('This reCAPTCHA is for testing').click();
    await page.getByRole('button', { name: 'Submit' }).click();
  });
});