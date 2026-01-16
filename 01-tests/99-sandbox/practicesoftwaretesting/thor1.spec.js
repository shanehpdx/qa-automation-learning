import { test, expect } from '@playwright/test';

test('Search and view product', async ({ page }) => {
  await page.goto('https://www.practicesoftwaretesting.com/');

  const brand = page.locator('a.navbar-brand[title="Practice Software Testing - Toolshop"]');
  await expect(brand).toBeVisible();

  await page.locator('[data-test="search-query"]').click();
  await page.locator('[data-test="search-query"]').fill('thor');
  await page.locator('[data-test="search-submit"]').click();

  const productCard = page
    .locator('[data-test="product-name"]')
    .filter({ hasText: /thor hammer/i })
    .locator('xpath=ancestor::a');

  await expect(productCard).toBeVisible();
  await productCard.click();

  await expect(page).toHaveURL(/\/product\/.+/);

  const productTitle = page.locator('[data-test="product-name"]');
  await expect(productTitle).toHaveText(/thor hammer/i);
});
