const {test, expect } = require('@playwright/test');

test('homepage has title', async ({page}) => {
    // 1. Go to homepage
    await page.goto('https://playwright.dev/');

    // 2. Expect the title to contain "Playwright"
    await expect(page).toHaveTitle(/Playwright/);

    // 3. Find the "Get started" link and assert it is visible
    const getStartedLink = page.getByRole('link', {name: 'Get started'});
    await expect(getStartedLink).toBeVisible();

    // 4. Click the "Get started" link and expect to navigate to the getting started page
    await getStartedLink.click();

    // 5. Assert that the URL contains something docs-like
    await expect(page).toHaveURL(/.*docs/);
        
    //6. Optional: check that a heading for the docs page is visible
    const heading = page.getByRole('heading', {name: /Installation/i});
    await expect(heading).toBeVisible();
});
