const { test,expect } = require("@playwright/test");
var create_account=require('../../testdata_task1.json')
test.describe('data driven',()=>{
    create_account.forEach(data=>{
        test(`create account ${data.firstName}`,async({page})=>{
            await page.goto('https://automationteststore.com/index.php?rt=account/create');
            await expect(page.getByText('Create Account')).toBeVisible();
            await page.locator('#AccountFrm_firstname').fill(data.firstName);
            await page.locator('#AccountFrm_lastname').fill(data.lastName);
            await page.locator('#AccountFrm_email').fill(data.email);
            await page.locator('#AccountFrm_telephone').fill(data.telephone);
            await page.locator('#AccountFrm_fax').fill(data.fax);
            await page.locator('#AccountFrm_company').fill(data.company);
            await expect(page.locator('#AccountFrm_firstname')).toBeVisible(data.firstName);
            await expect(page.locator('#AccountFrm_lastname')).toBeVisible(data.lastName);
            await expect(page.locator('#AccountFrm_email')).toBeVisible(data.email);
            await expect(page.locator('#AccountFrm_telephone')).toBeVisible(data.telephone);
            await expect(page.locator('#AccountFrm_fax')).toBeVisible(data.fax);
            await expect(page.locator('#AccountFrm_company')).toBeVisible(data.company);
        })
    })
})
