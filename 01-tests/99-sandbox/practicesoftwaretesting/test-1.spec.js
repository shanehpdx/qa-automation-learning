import { test, expect } from '@playwright/test';

test('Navigate to product page', async ({ page }) => {
  await page.goto('https://www.practicesoftwaretesting.com/');

  await page
    .getByRole('link', { name: 'Long Nose Pliers' })
    .click();

  await expect(page).toHaveURL(/product/);
  await expect(page.getByRole('heading', { level: 1 }))
    .toHaveText('Long Nose Pliers');
});