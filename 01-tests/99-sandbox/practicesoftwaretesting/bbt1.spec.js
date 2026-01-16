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

test('Learn to assert something on a page', async ({ page }) => {
  // 1) Go to the page
  await page.goto('https://www.practicesoftwaretesting.com/');

  // 2) Assert one obvious “page loaded” element
  await expect(page.getByRole('button', { name: /Testing Guide/ })).toBeVisible();

  // 3) Perform exactly one user action
  await page.getByRole('button', { name: /Testing Guide/ }).click();

  // 4) Assert exactly one result
  await expect(page.getByRole('heading', { name: /Testing Guide/ })).toBeVisible();

  // 5) Stop
});
