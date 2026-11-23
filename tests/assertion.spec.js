const { test,expect } = require("@playwright/test");

test('hard assert',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle("STORE");
    await expect(page.locator('#nava')).toBeVisible();
})

test.only('soft assert ',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html")
    await expect.soft(page.locator('#nava')).toBeVisible();
})