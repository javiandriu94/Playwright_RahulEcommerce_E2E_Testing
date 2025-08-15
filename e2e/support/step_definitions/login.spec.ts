import { Given, When, Then } from "@cucumber/cucumber";
import POManager from "../POManager";
import { expect } from "@playwright/test";



Given('the user is on the login page', async function () {
  const poManager = new POManager(this.page);   
  const login = poManager.getLoginPage();
  await login.goToAcademy();
});

When(
  'the user enters the following information username {string} password {string} role {string} and major {string}',
  async function (username, password, role, major) {
    const { page } = this;
    const poManager = new POManager(this.page);   
    const login = poManager.getLoginPage();

    await login.fillUserAndPasswordInput(username, password);
    await login.clickRadioButton(role);
    await login.selectDropdownOption(major);
    await login.acceptTermsAndConditions();
    await login.clickSignUpButton();
    await page.waitForLoadState('networkidle');
  }
);

Then(
  'the user should be redirected to the home page', 
  async function () {
    const { page } = this;
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
  }
);

Then(
  'the user should see an error message for incorrect credentials', 
  async function () {
    const poManager = new POManager(this.page);   
    const login = poManager.getLoginPage();
    await login.incorrectCredentialsMessage();
  }
)

When('the user clicks on the blinking text',
  async function () {
    const poManager = new POManager(this.page);   
    const login = poManager.getLoginPage();
    await login.verifyBlinkingDocumentLink();
    
  }
)

Then('should be redirected to the document request page',
  async function () {
    const poManager = new POManager(this.page);   
    const login = poManager.getLoginPage();
    const newPage = await login.clickBlinkingText();
    await newPage.waitForSelector('.preloader', { state: 'hidden', timeout: 15000 });
    await expect(newPage).toHaveURL('https://rahulshettyacademy.com/documents-request');
  }
)