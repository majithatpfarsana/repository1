const { test,expect } = require("@playwright/test");
const testdata=require("../testdata2.json")

test('login to application',async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("//input[@id='email1']").fill(testdata.interest[0]);
    await page.locator("//input[@id='password1']").fill(testdata.password);
    await page.pause();
})