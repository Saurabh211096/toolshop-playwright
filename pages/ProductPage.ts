import type { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly quantity: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.quantity = page.getByTestId('quantity');
        this.addToCartButton = page.getByTestId('add-to-cart');
    }
    async addToCart(qty: number) {
        await this.quantity.fill(String(qty));
        await this.addToCartButton.click();
    }
}