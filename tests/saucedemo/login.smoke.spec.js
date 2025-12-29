const {test, expect} = require('@playwright/test');

test.describe('SauceDemo Login Smoke Tests', () => {
    test('login succeeds for standard_user', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');

        // login form
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();

        // Post-login assertion: Invetory page loads
        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page.getByText('Products')).toBeVisible();

        // Bonus 'real' assertion: at least one product is listed
        const items = page.locator('.inventory_item');
        await expect(items).toHaveCount(6);
    });

    test('login fails for incorrect password', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');

        // login form
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('wrong_password');
        await page.getByRole('button', {name: 'Login'}).click();

        // Post-login assertion: error message is displayed
        const error = page.locator('[data-test="error"]');
        await expect(error).toBeVisible();
        await expect(error).toContainText(/Username and password do not match/i);
    });

    test('locked-out-user shows locked out message', async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        // login form
        await page.getByPlaceholder('Username').fill('locked_out_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();

        const error = page.locator('[data-test="error"]');
        await expect(error).toBeVisible();
        await expect(error).toContainText(/locked out/i );
    });
});
