// S21: product tests on the home page
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
});

test('home page shows products', async ({ page }) => {
    await expect(page.getByTestId('product-name').first()).toBeVisible();
    console.log(await page.getByTestId('product-name').count());
    await expect(page.getByTestId('product-name')).toHaveCount(9);
});

test('home page shows a price for every product', async ({ page }) => {
    await expect(page.getByTestId('product-price')).toHaveCount(9);
});