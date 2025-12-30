const {test, expect} = require('@playwright/test');

test('add item to cart updates badge and cart contents', async ({page}) => {
    // 1. Go to SauceDemo and login
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    // 2. Add first item to cart and verify badge updates
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 3. Navigate to cart and verify item is present
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // 4. verify cart contains exactly one item
    await expect(page.locator('.cart_item')).toHaveCount(1);
});
