const {test,expect}=require('@playwright/test');
test.skip('flaky test',async({page})=>{
    page.goto('https://testautomationpractice.blogspot.com/.');
    
    const btn=page.locator('.start');
    await btn.waitFor({state:'visible'});
    await btn.click();
    


})
test('flaky test 2',async({page})=>{
    page.goto('https://practice.expandtesting.com/dynamic-loading/2');
    
    const btn=page.getByRole('button',{name:"Start"});
    
    await btn.click();
    await expect(page.getByRole('heading',{name:"Hello World!"})).toBeVisible({timeout:10000});

    


})

