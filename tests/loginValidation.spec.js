const {test,expect } = require("@playwright/test");

test('Empty Login Attempt',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('.submit-btn').click();
    await expect(page.locator('.errorMessage')).toBeVisible('Email and Password is required');
})
test('Login with Email Only',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('sibi@gmail.com');
    await page.locator('.submit-btn').click();
    await expect(page.locator('.errorMessage')).toBeVisible('Password is required');
})
test('Login with Password Only',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#password1').fill('sibi@gmail.com');
     await page.locator('.submit-btn').click();
    await expect(page.locator('.errorMessage')).toBeVisible('Email is required');
})
test('Login with Invalid Credentials',async({page})=>{
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.locator('#email1').fill('sibi@gmail.com');
    await page.locator('#password1').fill('sibi@gmail.com');
     await page.locator('.submit-btn').click();
    await expect(page.locator('.errorMessage')).toBeVisible('Something went wrong');  
})