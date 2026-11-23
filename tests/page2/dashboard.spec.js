class Dashboard{
    constructor(page){
        this.page=page;
        this.products=page.locator('.inventory_item')
        this.productname=page.locator('.inventory_item_name');
        
    }
async printproducts(){
    await this.productname.first().waitFor();
    const names=await this.productname.allTextContents();
    const count=await this.productname.count();
    console.log('product listed',names);
    console.log('total products',count);

}
async selectproduct(productname){
    const item=this.products.filter({hasText:productname});
    await item.getByRole('button',{name:"Add to cart"}).click()

}
}
module.exports=Dashboard 