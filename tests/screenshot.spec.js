const {test,expect } = require("@playwright/test");

test('screenshot demo',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator("h3[data-test='error']")).toBeHidden();
    await page.locator("#login-button").click();
    await page.locator("h3[data-test='error']").screenshot({ path: 'error.png' });
 await expect(page.locator("h3[data-test='error']")).toBeVisible();
   await page.screenshot({ path: 'error1.png' });
});


