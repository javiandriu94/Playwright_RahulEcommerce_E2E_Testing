import { Page, Locator } from "playwright";


class EcommerceModules {
    readonly checkoutButton: Locator;
    readonly checkoutButton2: Locator;
    readonly addButton: Locator;
    readonly allProducts: Locator;
    readonly confirmButton: Locator;
    readonly deliveryLocationInput: Locator;
    readonly agreeTermCOnditions: Locator;
    readonly purchaseButton: Locator;
    readonly removeButton: Locator;
    readonly successMessage: Locator;
    readonly  deliveryLocatiobMessage: Locator;

    constructor(page: Page) {
        this.checkoutButton = page.locator('#navbarResponsive .nav-link');
        this.deliveryLocatiobMessage = page.getByLabel('Please choose your delivery location. ');
        this.checkoutButton2 = page.getByRole('button', { name: 'Checkout' });
        this.addButton = page.locator('button.btn-info');
        this.allProducts = page.locator('app-card');
        this.confirmButton = page.locator('button.btn-success');
        this.deliveryLocationInput = page.locator('#country');
        this.agreeTermCOnditions = page.locator('label[for="checkbox2"]');
        this.removeButton = page.getByRole('button', { name: 'Remove' })
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.successMessage =page.locator('.alert-success');
    }

}

export default EcommerceModules;