const { test,expect } = require("@playwright/test");

test('login and complete product purchase',async({page})=>{
    const productname="Sauce Labs Backpack";
    await page.goto('https://www.saucedemo.com/');
    console.log('application lounched successfully');
    await page.fill('#user-name',"standard_user");
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    console.log('login is successfull');
    await expect(page).toHaveURL(/inventory/);
    console.log('home page is visible');
    const count=await page.locator(".inventory_item_name").count();
    console.log('product nos:',count);
    for(let i=0 ;i<count;i++){
        const text=await page.locator(".inventory_item_name").nth(i).textContent()
        if(text.includes(productname)){
            await page.locator("#add-to-cart-sauce-labs-backpack").click();
            console.log(productname+'added to cart')
            break;
        }

    }
    await page.locator('.shopping_cart_link').click();
    console.log('shopping cart located')
    await expect(page.locator(".inventory_item_name")).toHaveText(productname)
    console.log('product name verified successfully');
    await page.locator('#checkout').click();
    console.log('checkout page is opened');
      await page.locator("#first-name").fill("Sibi");
    await page.locator("#last-name").fill("V");
    await page.locator("#postal-code").fill("682030");
    console.log("Shipping details entered successfully");
    await page.locator('#continue').click();
    await expect(page).toHaveURL(/checkout-step-two/);
    await page.getByRole('button',{name:"Finish"}).click();
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    console.log('product purchase done successfully');


})