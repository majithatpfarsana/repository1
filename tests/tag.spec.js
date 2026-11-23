const {  test,expect } = require("@playwright/test");

test.describe('saucedemo login',()=>{
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/');

})
test('@smoke login with valid credential should redirect to inventory',async({page})=>{
    await page.fill('#user-name',"standard_user");
    await page.fill('#password','secret_sauce');
    await page.click('#login-button')
    await expect(page).toHaveURL(/inventory/);

})
test('@regression Login with invalid credential to show error message', async({page}) => {

        await page.fill('#user-name', 'standardser' );
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator("h3[role='alert']")).toContainText('Epic sadface: Username and password do not match any user in this service');
    })
test('@sanity@login user see the validation error when the user name is missing',async({page})=>{
   await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator("h3[role='alert']")).toContainText('Epic sadface: Username is required'); 
        
})
})