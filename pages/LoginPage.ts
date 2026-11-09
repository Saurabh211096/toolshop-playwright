import type { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly registerLink: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByLabel('Email address');
        this.passwordInput = page.getByLabel('Password *', { exact: true });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.registerLink = page.getByRole('link', { name: 'Register your account' });
        this.errorMessage = page.getByTestId('login-error');
    }
    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/login');
    }
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}