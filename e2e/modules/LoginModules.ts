import {Page, Locator} from '@playwright/test'
class LoginModules {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly adminRadioButton: Locator;
    readonly userRadioButton: Locator;
    readonly majorDropdown: Locator;
    readonly termAndCondiditonsCheckbox: Locator;
    readonly userModal: Locator
    readonly okModalButton: Locator
    readonly SignInButton: Locator

    constructor(page:Page){
        this.usernameInput= page.locator('#username');
        this.passwordInput= page.locator('#password');
        this.userRadioButton=page.getByRole('radio', { name: 'User' })  //locator('input[value="user"]')
        this.adminRadioButton=page.getByRole('radio',{ name: "Admin"})  //locator('input[value="admin"]')
        this.termAndCondiditonsCheckbox = page.locator('#terms')
        this.majorDropdown= page.locator('select.form-control')
        this.userModal=page.locator('#myModal');
        this.okModalButton= page.locator('#okayBtn')
        this.SignInButton=page.locator('#signInBtn')
       
    }
}

export default LoginModules;

