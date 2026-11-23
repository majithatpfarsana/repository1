const { test,expect } = require("@playwright/test");

test('flight purchase',async({page})=>{
    await page.goto('https://blazedemo.com/');
   await page.locator("//select[@name='fromPort']").selectOption('Boston');
    await page.locator("//select[@name='toPort']").selectOption('New York');
    await page.getByRole('button',{name:"Find Flights"}).click();
    await page.locator('//tbody/tr[5]/td[1]/input[1]').click();
    const currenturl=page.url();
    expect (currenturl).toContain('purchase');
    console.log(currenturl);
    await expect(page).toHaveTitle(/purchase/i);
    await expect(page.locator('text=Airline: United')).toBeVisible();
    await expect(page.locator('text=Flight Number: UA954')).toBeVisible();
    await expect(page.locator('text=Price: 400')).toBeVisible();
    await expect(page.locator('text=Arbitrary Fees and Taxes: 514.76')).toBeVisible();
    await expect(page.locator('text=Total Cost: 914.76 ')).toBeVisible();
    await page.locator('#inputName').fill("Playwright JS");
    await page.locator('#address').fill("Bangalore");
    await page.locator('#state').fill("Karnataka");
    await page.locator('#cardType').selectOption("American Express");
    await page.locator('#creditCardNumber').fill("556622337788");
    await page.locator('#creditCardYear').fill("2025");
    await page.locator('#nameOnCard').fill("Playwright By Microsoft");
    await page.getByLabel(' Remember me').check();
    await expect (page.getByLabel('Remember me')).toBeChecked();
    await page.locator('input[value="Purchase Flight"]').click();
    const orderid=(await page.locator('//table[@class="table"]').filter({hasText:'id'}).locator('td').nth(1));
    const id=await orderid.textContent();
    await expect(id).not.toBeNull();
    await expect(id).not.toBe(" ");
    console.log("id: ",id);

})