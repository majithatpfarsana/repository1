const { test,expect } = require("@playwright/test");

test('static web table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const webtable=await page.locator('//table[@name="BookTable"]');
    const row= await webtable.locator('tbody tr')
    const rows_count=await row.count();
    console.log(rows_count);
    const column= await webtable.locator('tbody tr th');
    const column_count= await column.count();
    console.log(column_count);
    const selenium_row=row.filter({hasText:'Master In Selenium'});
    const all_tds=await selenium_row.locator('td');
    const BookName=await all_tds.nth(0).textContent();
    const Author=await all_tds.nth(1).textContent();
    const Subject=await all_tds.nth(2).textContent();
    const Price=await all_tds.nth(3).textContent();
    console.log(BookName,Author,Subject,Price);
})  