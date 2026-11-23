const { test,expect } = require("@playwright/test");

test.describe('saucedemo test',()=>{
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    })
    test('valid Login', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL(/inventory/);
        
    });

})
test.afterEach(async({page})=>{
    await page.screenshot({path:'/screenshots/${Date.now()}.png'})
})
