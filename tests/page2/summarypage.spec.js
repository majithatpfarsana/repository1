const {test,expect}=require('@playwright/test')
class Summarypage{
    constructor(page){
        this.page=page;
        this.subtotal=page.locator('.summary_subtotal_label');
        this.finishbutton=page.locator('#finish');
    }
    async summarydetails(){
        const itemtotal=await this.subtotal.textContent();
        console.log(itemtotal);
        await expect(itemtotal).toContain('Item total:');
    }
    async clickfinish(){
        await this.finishbutton.click();
    }
}
module.exports=Summarypage;