import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly productNames: Locator;

    constructor(page: Page) {
        super(page);
        this.productNames = page.getByTestId('product-name');
    }
    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }
    async openProduct(name: string) {
        await this.productNames.getByText(name, { exact: true }).click();
    }
}