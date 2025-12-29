const { test, expect } = require('@playwright/test');


test('docs flow: homepage -> Get started -> Installation -> Writing tests', async ({ page }) => {
  // 1. Navigate to the Playwright homepage
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

    // 2. Click on the "Get started" link
    await page.getByRole('link', { name: 'Get started' }).click();

    // 3. Verify navigation to the docs page
    await expect(page).toHaveURL(/.*docs/);

    // 4. Verify the "Installation" heading is visible  
    await expect(page.getByRole('heading', { name: /Installation/i })).toBeVisible();

    // 5. Click on the "Writing tests" link in the sidebar
    await page.getByRole('link', { name: 'Writing tests',/* exact: true*/ }).click();

    // 6. Verify navigation to the "Writing tests" section
    await expect(page).toHaveURL(/.*docs\/writing-tests/);
    await expect(page.getByRole('heading', { name: /Writing tests/i })).toBeVisible();
});
