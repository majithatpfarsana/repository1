const { test,expect } = require("@playwright/test");

test('verify single input field',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const inputfeild=await page.locator('#single-input-field');
    await inputfeild.fill('hello');
    await page.getByRole('button',{name:'Show Message'}).click();
    await expect (page.locator('#message-one')).toContainText('hello');
    await page.pause();
})
test('handling radio button',async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php');
    await page.getByRole('radio').nth(0).check();
    await page.locator('#button-one').click();
    await expect(page.getByRole('radio')).toBeChecked();
})
test('handling check box',async({page})=>{
    await page.goto('https://selenium.qabible.in/check-box-demo.php');
    const checkboxes=await page.getByRole('checkbox');
    await checkboxes.nth(1).check();
    await checkboxes.nth(2).check();
    await checkboxes.nth(3).check();
    await checkboxes.nth(4).check();

    await expect (checkboxes.nth(1)).toBeChecked;
    await expect (checkboxes.nth(2)).toBeChecked;
    await expect (checkboxes.nth(3)).toBeChecked;
    await expect (checkboxes.nth(4)).toBeChecked;
})