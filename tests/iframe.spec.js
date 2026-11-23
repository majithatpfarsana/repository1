const {test,expect } = require("@playwright/test");

test('i frame',async({page})=>{
    await page.goto(' https://ui.vision/demo/webtest/frames/');
    const allframe=page.frames();
    console.log("no of frames",allframe.length);
    const frame1=page.frameLocator('frame[src="frame_1.html"]');
    await frame1.locator('[name="mytext1"]').fill('hello world');
    const frame2=page.frameLocator('frame[src="frame_2.html"]');
    await frame2.locator('[name="mytext2"]').fill("hi");
})