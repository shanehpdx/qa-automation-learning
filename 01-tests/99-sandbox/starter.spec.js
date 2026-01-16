import { test, expect } from '@playwright/test';

/**
 * Starter Test Template (5-Step Recipe)
 *
 * 1) Go to the page
 * 2) Assert one obvious “page loaded” element
 * 3) Perform exactly one user action
 * 4) Assert exactly one result
 * 5) Stop
 *
 * Rules:
 * - No flows
 * - No “while I’m here”
 * - Keep locators obvious, not perfect
 */

test('starter template — replace this title', async ({ page }) => {
  // 1) Go to the page
  await page.goto('https://example.com/');

  // 2) Assert one obvious “page loaded” element
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();

  // 3) Perform exactly one user action
  await page.getByRole('link', { name: 'More information...' }).click();

  // 4) Assert exactly one result
  await expect(page).toHaveURL(/iana\.org/);

  // 5) Stop
});
