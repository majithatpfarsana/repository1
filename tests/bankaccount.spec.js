const { test,expect } = require("@playwright/test");

test('bank acount creation and deletion',async({page})=>{
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.getByRole('button',{name:"Bank Manager Login"}).click();
    const currenturl=page.url();
    await expect(currenturl).toContain('manager');
    await page.getByRole('button',{name:"Add Customer"}).click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Any name');
    await page.getByPlaceholder('Post Code').fill('682001');
    
    page.once("dialog",async(dialog)=>{
      await expect(dialog.message()).toContain('Customer added successfully with customer id');
      const alertmessage=dialog.message();
      console.log(alertmessage);
      dialog.accept();
      
    })
    await page.getByText('Add Customer').nth(1).click();
    
    await page.getByText('Open Account').click();
    await page.locator("#userSelect").selectOption('John Any name');
    await page.locator('#currency').selectOption('Dollar');
    page.once('dialog',async(alert)=>{
      await expect (alert.message()).toContain('Account created successfully with account Number');
      const alertmessage2=alert.message();
      console.log(alertmessage2);
      await alert.accept();
    })
    await page.getByRole('button',{name:"Process"}).click();
    await page.getByRole('button',{name:"Customers"}).click();
    await page.getByPlaceholder('Search Customer').fill('Any name');
    
    const row=page.locator('table tbody tr');
    await expect(row).toHaveCount(1);
    const headings = await page.locator('table thead td').allInnerTexts();
    const customerData = await row.first().locator('td').allTextContents();
    console.log("Customer Details:");
   
    for(let i=0;i<(headings.length)-1;i++){
      console.log(headings[i]+":"+customerData[i]);
    }
   await page.getByText('Delete').nth(1).click();
   await page.getByRole('button',{name:"Home"}).click(); 
   await page.getByRole('button',{name:"Bank Manager Login"}).click();
   await page.getByRole('button',{name:"Customers"}).click();
    await page.getByPlaceholder('Search Customer').fill('Any name');
    const rows = page.locator('table tbody tr');

    const rowCount = await rows.count();
if (rowCount == 0) {

    console.log('Customer deleted successfully');
    console.log('There is no customer with the given name');

}
    
    

})