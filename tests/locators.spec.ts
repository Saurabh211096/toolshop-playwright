import { test, expect } from '@playwright/test';

test('login page elements are visible', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Register your account' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot your Password?' })).toBeVisible();
});