const { test,expect } = require("@playwright/test");
var emp_data=require('../testdata.json');
test.describe('data driven test',()=>{
    
    emp_data.forEach(data=>{
    test(`create user ${data.FirstName}`,async({page})=>{
        await page.goto('https://demoqa.com/webtables');
        await expect(page).toHaveTitle('demosite');
        await page.locator('#addNewRecordButton').click();
        await page.getByPlaceholder('First Name').fill(data.FirstName);
        await page.getByPlaceholder('Last Name').fill(data.LastName);
        await page.getByPlaceholder('name@example.com').fill(data.EmailAddress);
        await page.getByPlaceholder('Age').fill(data.Age);
        await page.getByPlaceholder('Salary').fill(data.Salary);
        await page.getByPlaceholder('Department').fill(data.Depart);
        await page.locator('#submit').click();
    })})

})