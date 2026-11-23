const { test,expect } = require("@playwright/test");

test.skip('mouse hover',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const user1=await page.locator("//img[@alt='User Avatar']").nth(0);
    const user2=await page.locator("//img[@alt='User Avatar']").nth(1);
    const user3=await page.locator("//img[@alt='User Avatar']").nth(2);
    await user1.hover();
    await user2.hover();
    await user3.hover();
    await page.close();

})

test.skip('mouse double click',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click');
    const button=await page.locator("#double-click-btn");
    
    await button.dblclick();
    await page.waitForTimeout(3000);
    await page.close();

})

test.skip('mouse right click',async({page})=>{
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
    const rightclick=await page.locator("//span[@class='context-menu-one btn btn-neutral']");
    
    await rightclick.click({button:"right"});
    await page.waitForTimeout(3000);
    await page.close();

})

test('mouse drag and drop',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    const pageframe=await page.frameLocator(".demo-frame");
    const todrage= await pageframe.locator('#draggable');
    const todrop=await pageframe.locator('#droppable');
    await todrage.dragTo(todrop);
    await page.waitForTimeout(3000);
    await page.close();

})
