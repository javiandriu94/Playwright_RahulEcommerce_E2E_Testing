import {Page, expect} from '@playwright/test'
import LoginModules from '../modules/LoginModules'

class LoginPage  {
    private page: Page;
    private login: LoginModules;

    constructor (page:Page){
        this.page= page;
        this.login= new LoginModules(page)
    }
    async goToAcademy () {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise');
    }

    async fillUserAndPasswordInput (username: string, password: string) {
        await this.login.usernameInput.fill(username);
        await this.login.passwordInput.fill(password);
        if ((username !== 'rahulshettyacademy') || (password !== 'learning') ) {
            await this.login.incorrectCredentialsMessage.isVisible();
            
        }
    }

    async incorrectCredentialsMessage () {
        await expect(this.login.incorrectCredentialsMessage).toContainText('Incorrect username/password');
    }

    async clickRadioButton(role:string) {
        if (role === "User") {
            await this.login.userRadioButton.click();
            await expect(this.login.userRadioButton).toBeChecked();
            await expect(this.login.adminRadioButton).not.toBeChecked();
            await expect(this.login.userModal).toBeVisible();
            await this.login.okModalButton.click();
        } else {
            await this.login.adminRadioButton.click();
            await expect(this.login.adminRadioButton).toBeChecked();
            await expect(this.login.userRadioButton).not.toBeChecked();
        }
    }

    async selectDropdownOption (major:string) {
        if(major === 'Student'){
            await this.login.majorDropdown.selectOption('stud')
        }else if(major === 'Teacher'){
            await this.login.majorDropdown.selectOption('teach')
        }else {
            await this.login.majorDropdown.selectOption('consult')
        }
    }

    async acceptTermsAndConditions () {
        await this.login.termAndCondiditonsCheckbox.click();
        await expect(this.login.termAndCondiditonsCheckbox).toBeChecked();
    }

    async clickSignUpButton () {
        await this.login.SignInButton.click()
    }
}
export default LoginPage;