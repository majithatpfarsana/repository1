const {test,expect } = require("@playwright/test");

test.skip('simple alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",(dia)=>{
      expect(dia.message()).toBe('I am a JS Alert');
      dia.accept();
      
    })
    await page.locator('//button[@onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
})

test.skip('java script confirm alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",(dia)=>{
      expect(dia.message()).toBe('I am a JS Confirm');
      dia.accept();
      
    })
    await page.locator('//button[@onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');

})
test('java script prompt alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",(dia)=>{
      expect(dia.message()).toBe('I am a JS prompt');
      dia.accept("welcome to testing");
      
    })
    await page.locator('//button[@onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: welcome to testing');

})