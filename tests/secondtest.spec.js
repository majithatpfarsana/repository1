const {test,expect}=require('@playwright/test');
test('homepage',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    const pagetitle=await page.title();
    console.log('page title is',pagetitle)
    await expect(page).toHaveTitle('STORE')
    const pageurl=await page.url();
    console.log('page url is',pageurl)
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.close();
})