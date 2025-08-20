import { Given, When,Then } from "@cucumber/cucumber";
import POManager from "../POManager";
import { expect } from "@playwright/test";

Given('the user logs into the ecommerce platform', async function () {
  const poManager = new POManager(this.page);   
  const login = poManager.getLoginPage();
  await login.goToAcademy();
  await login.fillUserAndPasswordInput('rahulshettyacademy', 'learning');
  await login.acceptTermsAndConditions();
  await login.clickSignUpButton();
});

When('selects products and goes to checkout', { timeout: 60 * 1000 }, async function(){
    const poManager = new POManager(this.page);   
    const ecommerce = poManager.getEcommercePage();
    await ecommerce.selectProduct();
    await ecommerce.clickConfirmPurchase()
})

Then('confirms the order and verifies the success message', { timeout: 60000 }, async function(){
    const poManager = new POManager(this.page);   
    const ecommerce = poManager.getEcommercePage();
    await ecommerce.enterDeliveryLocation();
    await ecommerce.verifySuccessMessage();
    
})