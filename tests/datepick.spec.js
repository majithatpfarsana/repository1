const { test,expect } = require("@playwright/test");

test('date picker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').click();
    await page.locator('#datepicker').fill('10/10/2024');
    await page.keyboard.press("Enter");
    await page.locator('#txtDate').click();
    await page.locator('#txtDate').fill('12/10/2024');
})