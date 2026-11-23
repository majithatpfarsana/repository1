const {test,expect}=require ('@playwright/test');
test('verify url contain signup',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    const currenturl=page.url();
    console.log('current url',currenturl)
    expect(currenturl).toContain('signup');

})
test('verify page title contains automation',async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app')
        const pagetitle=await page.title();
        console.log('page title',pagetitle)
        expect(pagetitle).toContain('Automation')
        
    
})
