const {test,expect} = require('@playwright/test')

test('demo of webtable', async ({page})=> {
    await page.goto('https://practice.qabrains.com/ecommerce/login')
    await page.getByPlaceholder('eg. user@user.com').fill('test@qabrains.com');
    await page.locator('#password').fill('Password123');
    await page.getByRole('button',{name:'Login'}).click();
    //await page.getByAltText('Sample Shirt Name').click();
    await expect(page.getByText('A sample description for the product.').first()).toBeVisible();
})
