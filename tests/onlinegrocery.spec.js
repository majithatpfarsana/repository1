const { test } = require("@playwright/test");


test('grocery shopping',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await page.getByPlaceholder('Search for Vegetables and Fruits').fill('Brocolli');
    await page.locator('//button[@class=""]').click();
    await page.getByAltText('Cart').click();
    await expect(page.locator('//div[@class="cart-preview active"]//div//div//ul[@class="cart-items"]')).toContainText("Brocolli - 1 Kg");
    await page.getByRole('button',{name:"PROCEED TO CHECKOUT"}).click();
    await page.getByRole('button',{name:"Place Order"}).click();
    await page.locator('//div[@class="wrapperTwo"]//div//select').selectOption('India');
    await page.locator('//input[@type="checkbox"]').click();
    await page.getByRole('button',{name:"Proceed"}).click();
    await expect(page.locator(".wrapperThree")).toContainText("Thank you. Your order has been placed successfully ...!!! ");
    const messege=await page.locator(".wrapperThree").textContent()
    console.log(messege);
}) 