// S19: login tests (actions and assertions)
import { test, expect } from '@playwright/test';

test.describe('Login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    // test.afterEach(async ({ page }) => {
    //     console.log('Test finished');
    // });

    test('customer can log in', async ({ page }) => {
        await page.getByLabel('Email address').fill('srbhingole8@gmail.com');
        await page.getByLabel('Password *', { exact: true }).fill('2110@Saurabh');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/account/);
        await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
        await expect(page.getByTestId('page-title')).toHaveText('My account');
        await expect(page.getByTestId('nav-sign-in')).not.toBeVisible();   // new
        await expect(page.getByRole('link', { name: 'Register your account' })).not.toBeVisible();
        await page.locator('#menu').click();
        await page.getByText('Sign out').click();
    });

    test('wrong password shows an error', async ({ page }) => {
        await page.getByLabel('Email address').fill('admin@practicesoftwaretesting.com');
        await expect(page.getByTestId('email')).toHaveValue('admin@practicesoftwaretesting.com');
        await page.getByLabel('Password *', { exact: true }).fill('wrongpass');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByTestId('login-error')).toHaveText('Invalid email or password');
        await expect(page).toHaveURL(/login/);
        await expect(page.getByRole('heading', { name: 'My account' })).not.toBeVisible();
    });
});

