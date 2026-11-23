exports.PlaceorderPage=class PlaceorderPage{
    constructor(page){
        this.page=page;
        this.placeorderButton=".btn.btn-success";
        this.name="#name";
        this.country="#country";
        this.city="#city";
        this.creditcard="#card"
        this.month="#month";
        this.year="#year";
        this.purchasebutton='button[onclick="purchaseOrder()"]'
        this.okbutton=".confirm btn btn-lg btn-primary";

    }
    async clickonplaceorder(){
        await this.page.locator(this.placeorderButton).click();
    }
    async fillcustomerdetails(name,country,city,creditcard,month,year){
        await this.page.locator(this.name).fill(name);
        await this.page.locator(this.country).fill(country);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.creditcard).fill(creditcard);
        await this.page.locator(this.month).fill(month);
        await this.page.locator(this.year).fill(year);
    }
    async clickonpurchasebutton(){
        await this.page.locator(this.purchasebutton).click();
    }
}