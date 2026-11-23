const { test,expect } = require("@playwright/test");

test('keyboard action demo',async({page})=>{
    await page.goto('https://www.onlinenotepad.io/?edit-id=f2a48af2-ad00-4634-939b-a474fe9fbd6d');
    await page.keyboard.type('welcome to kerala');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Control+V');
})