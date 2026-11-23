const {test,expect}=require ('@playwright/test');
test('special selectors',async({page})=>{
await page.goto('https://selenium.qabible.in/simple-form-demo.php')
await page.getByRole('link',{name:"Input Form"
}).click();
await page.getByRole('link',{name:"Checkbox Demo"}).click();
await page.getByLabel('Click on this check box').check();
await page.getByRole('link',{name:"Radio Buttons Demo"}).click();

})
