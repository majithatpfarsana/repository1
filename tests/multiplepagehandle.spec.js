const { test,expect,chromium } = require("@playwright/test");

test.skip('multiple web page handling',async({page})=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage()
    const allpage=context.pages();
    console.log("no.of pages opened:",allpage.length);
    await page1.goto('https://www.demoblaze.com/');
    await expect(page1).toHaveTitle("STORE");
    await page2.goto('https://formy-project.herokuapp.com/');
    await expect(page2).toHaveTitle('Formy');
    await browser.close();

})

test('multiple web page handling with one url',async({page})=>{
    const browser=await chromium.launch({
        headless:false
    })
    const context=await browser.newContext();
    const page1=await context.newPage();

    
    await page1.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page1).toHaveTitle("OrangeHRM");
    const pagepromise=context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();
    const newpage= await pagepromise;
    await expect(newpage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");
    await page1.waitForTimeout(3000);
    await browser.close();

})