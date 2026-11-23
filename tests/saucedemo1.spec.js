const {test,expect}=require ('@playwright/test');
test('saucedemo test',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('input#user-name').fill('standarduser');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input[type="submit"]').click();
    //console.log(await page.locator('h3[role="alert"]').textContent('Epic sadface: Username and password do not match any user in this service'))
    const errormessage=await page.locator('h3[role="alert"]').textContent('Epic sadface');
    console.log("error message:",errormessage);
    await page.pause();
})