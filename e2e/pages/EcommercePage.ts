import EcommerceModules from "../modules/EcommerceModules";
import { Page, expect } from '@playwright/test'

class EcommercePage {
    private page: Page;
    private ecommerce: EcommerceModules;

    constructor(page: Page) {
        this.page = page;
        this.ecommerce = new EcommerceModules(page);
    }

    async selectProduct () {
        const allProducts = await this.ecommerce.allProducts.count();
        let productCounter : number = 1;
        
        while(productCounter <= 3) { 
            const randomIndex = Math.floor(Math.random() * allProducts);
            const product = this.ecommerce.allProducts.nth(randomIndex);
            await product.locator('button.btn-info').click();
            await expect(this.ecommerce.checkoutButton).toContainText(`Checkout ( ${productCounter} )`); 
            productCounter++;
        }
        await this.ecommerce.checkoutButton.click();
        await this.ecommerce.removeButton.waitFor({ state: 'visible' });
    }

    async clickConfirmPurchase () {
        await expect(this.ecommerce.checkoutButton2).toBeVisible();
        await this.ecommerce.confirmButton.click();
        await this.ecommerce.deliveryLocatiobMessage.waitFor({ state: 'visible' });
    }
    
    async enterDeliveryLocation () {
        await this.ecommerce.deliveryLocationInput.fill('Ecuador');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.ecommerce.agreeTermCOnditions.click();
        await expect(this.ecommerce.agreeTermCOnditions).toBeChecked();
        await this.page.waitForTimeout(1000);
        await this.ecommerce.purchaseButton.click();
    }

    async verifySuccessMessage () {
        await expect(this.ecommerce.successMessage).toBeVisible();
        await expect(this.ecommerce.successMessage).toContainText('Success! Thank you! Your order will be delivered in next few weeks :-).');
    }
}

export default EcommercePage;