const{test,expect}=require('@playwright/test')
const Login=require('./login.spec.js');
const Dashboard=require('./dashboard.spec.js')
const Cart=require('./cart.spec.js')
const ShippingDetails=require('./shippingdetails.spec.js')
const Summarypage=require('./summarypage.spec.js')
const OrderConfirmation=require('./orderconfirmation.spec.js');

test('end to end testing',async({page})=>{
    const username="standard_user";
    const password="secret_sauce";
    const productname="Sauce Labs Backpack";
    const login=new Login(page);
    await login.gotowebsite();
    await login.validlogin(username,password);
    const dashboard=new Dashboard(page);
    await dashboard.printproducts();
    await dashboard.selectproduct(productname)
    const cart= new Cart(page);
    await cart.getchecked();
    await cart.checkout();
    const shipping=new ShippingDetails(page);
    await shipping.shipment('majitha','farsana','673584')
    await shipping.submitshipping();
    const summary=new Summarypage(page);
    await summary.summarydetails();
    await summary.clickfinish();
    const confirmation=new OrderConfirmation(page)
    await verifyOrderConfirmation() 
})