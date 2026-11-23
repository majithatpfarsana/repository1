import { test,expect } from "@playwright/test";
import{login} from "./utils/login.js"
import{openinventory} from "./utils/navigation.js"
test('login and navigate',async({page})=>{
    await login(page,"standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory/);
    await openinventory(page)
    await expect(page.locator('.title')).toHaveText('Products')
})