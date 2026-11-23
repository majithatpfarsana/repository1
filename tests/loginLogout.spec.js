const {test,expect } = require("@playwright/test");

test('Login and Logout Verification',async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('text=Products')).toBeVisible();
    const currenturl=page.url();
    await expect(currenturl).toContain('inventory.html');
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    const newurl=page.url();
    await expect(newurl).not.toContain('index.html');
    console.log("cursor in login page :",newurl);
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();


})