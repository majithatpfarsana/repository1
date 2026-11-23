const {test,expect}=require('@playwright/test');
test('saucedemo login',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('xpath=//input[@id="user-name"]').fill('standard_user')
    await page.locator('xpath=//input[@id="password"]').fill('secret_sauce')
    await page.locator('xpath=//input[@id="login-button"]').click();
})