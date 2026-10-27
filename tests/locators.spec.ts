import { test, expect } from '@playwright/test';

test('login page elements are visible', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Register your account' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot your Password?' })).toBeVisible();
    await expect(page.getByLabel('Email address')).toBeVisible();
    await expect(page.getByPlaceholder('Your email')).toBeVisible();
    await expect(page.getByLabel('Password *', { exact: true })).toBeVisible();
    await expect(page.getByText('or use')).toBeVisible();
    await expect(page.getByTestId('email')).toBeVisible();          // the email box, by its test id
    await expect(page.getByTestId('login-submit')).toBeVisible();   // the Login button, by its test id
    await expect(page.getByTestId('password')).toBeVisible();
    await expect(page.getByRole('link', { name: /register your account/i })).toBeVisible();   // new: pattern, any capitals
});

test('login page by three locator types', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByLabel('Email address *', { exact: true })).toBeVisible();   // the email box, its exact label
    await expect(page.getByTestId('forgot-password-link')).toBeVisible(); // the "Forgot your Password?" link
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Documentation' })).toBeVisible();
});