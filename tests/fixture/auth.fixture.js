import{test as base,expect} from "@playwright/test";


export const test=base.extend({
   loggedInUser:async({page},use)=>{
    await page.getByPlaceholder('Enter Email').pressSequentially("admin@email.com",{delay:200});
    await page.getByPlaceholder('Enter Password').pressSequentially("admin@123");
    await page.getByRole("button",{name:'Sign in'}).click();
    
    await use(page);
     console.log("Running Before Test");
    
   
    console.log("Running After Test");

await page.getByAltText("menu").click();

await page.getByText("Sign out").click();

await expect(page).toHaveURL(/login/);

   }
})