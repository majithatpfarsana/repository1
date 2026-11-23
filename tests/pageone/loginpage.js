exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page;
        this.loginlink="#login2";
        this.usernametextbox="#loginusername";
        this.passwordtextbox="#loginpassword";
        this.loginbutton='button[onclick="logIn()"]';
;

    }
    async gotopage(){
        await this.page.goto('https://www.demoblaze.com/index.html');

    }
    async loginform(username,password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernametextbox).fill(username);
        await this.page.locator(this.passwordtextbox).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
    
}