const { test,expect } = require("@playwright/test");

test('valid test',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByPlaceholder('Enter Email').pressSequentially("admin@email.com",{delay:200});
    await page.getByPlaceholder('Enter Password').pressSequentially("admin@123");
    await page.getByRole("button",{name:'Sign in'}).click();
    await page.getByAltText("menu").click();
    await page.getByRole("button",{name:'Sign out'}).click();
    await expect(page).toHaveURL(/login/);
})