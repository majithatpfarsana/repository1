const { test,expect } = require("@playwright/test");

test.describe("QA Brains Login Module",()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://practice.qabrains.com/ecommerce/login');
    })
    test('@smoke login with valid credentials should navigate to the appropriate page',async({page})=>{
        await page.getByPlaceholder('eg. user@user.com').fill("test@qabrains.com");
        await page.getByPlaceholder('*******').fill("Password123");
        await page.getByRole('button',{name:"Login"}).click();
        await expect(page).toHaveURL(/ecommerce/);
    })
    test('@regression login with invalid email and valid passwor should show error message',async({page})=>{
        await page.getByPlaceholder('eg. user@user.com').fill("test@gmail.com");
        await page.getByPlaceholder('*******').fill("Password123");
        await page.getByRole('button',{name:"Login"}).click();
        await expect(page.locator('.text-red-500.text-sm.mt-1')).toContainText('Username is incorrect');
    })
     test('@sanity login with email field empty and correct password should show error message',async({page})=>{
        await page.getByPlaceholder('eg. user@user.com').fill("");
        await page.getByPlaceholder('*******').fill("Password123");
        await page.getByRole('button',{name:"Login"}).click();
        await expect(page.locator('.text-red-500.text-sm.mt-1')).toContainText('Email is a required field');
    })
})