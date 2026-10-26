// S15: my first test against Toolshop
import { test, expect } from '@playwright/test';

test('home page has the Toolshop title', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveTitle(/Toolshop/);
});

test('login page contains the Login title', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await expect(page).toHaveTitle(/Login/);
});

test('contact page includes the Contact title', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/contact');
    await expect(page).toHaveTitle(/Contact/);
});