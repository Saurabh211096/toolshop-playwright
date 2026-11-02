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

test('first card shows its price and name', async ({ page }) => {
    const cards = page.locator('.card');
    await expect(cards).toHaveCount(9);
    const firstCard = cards.first();
    await expect(firstCard.getByTestId('product-price')).toBeVisible();
    await expect(firstCard.getByTestId('product-name')).toBeVisible();
});

test('open Combination Pliers by its name', async ({ page }) => {
    const cards = page.locator('.card');
    const pliersCard = cards.filter({ hasText: 'Combination Pliers' });
    await pliersCard.click();
    await expect(page.getByTestId('product-name')).toHaveText('Combination Pliers');
});

test('open Thor Hammer by its name', async ({ page }) => {
    const cards = page.locator('.card');
    const thorCard = cards.filter({ hasText: 'Thor Hammer' });
    await thorCard.click();
    await expect(page.getByTestId('product-name')).toHaveText('Thor Hammer');
});

test('Slip Joint Pliers card shows its price', async ({ page }) => {
    const cards = page.locator('.card');
    await expect(cards.filter({ hasText: 'Slip Joint Pliers' }).getByTestId('product-price')).toBeVisible();
});

test('open a product by a name in a variable', async ({ page }) => {
    const cards = page.locator('.card');
    const productName = 'Long Nose Pliers';
    await cards.filter({ hasText: productName }).click();
    await expect(page.getByTestId('product-name')).toHaveText(productName);
});

test('cards with an out-of-stock label', async ({ page }) => {
    const cards = page.locator('.card');
    const outOfStockCards = cards.filter({ has: page.getByTestId('out-of-stock') });
    await expect(outOfStockCards).toHaveCount(1);
});

test('open Claw Hammer with Shock Reduction Grip by a variable', async ({ page }) => {
    const cards = page.locator('.card');
    const productName = 'Claw Hammer with Shock Reduction Grip';
    await cards.filter({ hasText: productName }).click();
    await expect(page.getByTestId('product-name')).toHaveText(productName);
});