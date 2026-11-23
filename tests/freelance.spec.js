import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.locator('h1')).toContainText('Learn Automation Courses');
  await page.getByRole('button', { name: 'Add to Cart right arrow' }).nth(1).click();
  await page.getByRole('button', { name: 'Cart 1' }).click();
  await page.getByRole('button', { name: 'Enroll Now' }).click();
  await expect(page.getByRole('dialog')).toContainText('Enroll Now');
  await page.locator('#address').click();
  await page.locator('#address').fill('calicut');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('35258');
  await page.getByRole('dialog').getByRole('button', { name: 'Enroll Now' }).click();
  //await expect(page.locator('h4')).toContainText('Your order id is order-15k1j');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('img', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
});


test.skip('test signup', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('maji');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('jg1f@email.com');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('ash@223');
  await page.getByRole('checkbox', { name: 'PlaywrightTests' }).check();
  await page.locator('#gender2').check();
  await page.locator('#state').selectOption('Kerala');
  await page.locator('#hobbies').selectOption('Playing');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByText('Signup successfully, Please').click();
});

test('test spacejet', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('to-testID-origin').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.getByTestId('return-date-dropdown-label-test-id').click();
  await page.getByTestId('home-page-travellers').click();
  await page.getByTestId('Infant-testID-plus-one-cta').click();
  await page.getByTestId('home-page-travellers-done-cta').click();
  await page.getByTestId('home-page-flight-cta').click();
  await expect(page.getByTestId('application-id')).toContainText('Round Trip : Agra to DelhiDepart Date : Fri, 06 Nov 2026Return Date : Thu, 10 Dec 2026 Passengers : 1 Adult 1 Infant');
  await page.getByText('₹ 2,999Earn 52 Points').click();
});