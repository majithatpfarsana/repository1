class ShippingDetails{
    constructor(page){
        this.page=page;
        this.firstname=page.locator('#first-name');
        this.lastname=page.locator('#last-name');
        this.zip=page.locator('#postal-code');
        this.continuebutton=page.locator('#continue');

    }
    async shipment(firstname,lastname,zip){
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.zip.fill(zip);

    }
    async submitshipping(){
        await this.continuebutton.click();
    }
}
module.exports=ShippingDetails