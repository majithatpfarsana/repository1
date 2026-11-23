class Cart{
    constructor(page){
        this.page=page;
        this.carticon=page.locator('.shopping_cart_link');
        this.cartitem=page.locator('.cart_item .inventory_item_name');
        this.checkoutbutton=page.locator('#checkout');
    }
    async getchecked(){
        await this.carticon.click();
    }
    async checkout(){
        await this.checkoutbutton.click();

    }
}
module.exports=Cart;