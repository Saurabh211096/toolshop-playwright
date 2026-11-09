// S19: login tests (actions and assertions)
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    // test.afterEach(async ({ page }) => {
    //     console.log('Test finished');
    // });

    test('customer can log in', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('srbhingole8@gmail.com', '2110@Saurabh');
        await expect(page).toHaveURL(/account/);
        await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
        await expect(page.getByTestId('page-title')).toHaveText('My account');
        await expect(page.getByTestId('nav-sign-in')).not.toBeVisible();   // new
        await expect(page.getByRole('link', { name: 'Register your account' })).not.toBeVisible();
        await page.locator('#menu').click();
        await page.getByText('Sign out').click();
        await expect(page.getByTestId('nav-menu')).not.toBeVisible();
    });

    test('wrong password shows an error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('admin@practicesoftwaretesting.com', 'wrongpass');
        await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
        await expect(page).toHaveURL(/login/);
        await expect(page.getByRole('heading', { name: 'My account' })).not.toBeVisible();
    });

    test('empty email shows a message', async ({ page }) => {
        await page.getByLabel('Password *', { exact: true }).fill('Test@1234');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Email is required')).toBeVisible();
    });

    test('email without @ shows a message', async ({ page }) => {
        await page.getByLabel('Email address').fill('srbhingole8gmail.com');
        await page.getByLabel('Password *', { exact: true }).fill('2110@Saurabh');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Email format is invalid')).toBeVisible();
    });
});

