import { test, expect } from '@playwright/test';
import { LoginPage } from './loginpage';
import { HomePage } from './homepage';
import { CartPage } from './cartpage';
import { PlaceorderPage } from './placeorderpage';

test('demoblaze',async({page})=>{
    //login
    const login=new LoginPage(page);
    await login.gotopage();
    await login.loginform('sibivarughese', 'test@123');
    //home
    const home=new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000)
    await home.gotoCart();
    await page.waitForTimeout(3000)
    //cart
    const cart=new CartPage(page);
    await page.waitForTimeout(3000)
    const status=await cart.checkProductInCart('Nexus 6');
    //placeorder
    const order=new PlaceorderPage(page);
    await order.clickonplaceorder();
    await order.fillcustomerdetails('majitha','india','kerala','15753','4','2026');
    await order.clickonpurchasebutton();
})
