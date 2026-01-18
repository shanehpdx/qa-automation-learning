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

test('Link launches new tab and more fun with regex', async ({ page }) => {
  // 1) Go to the page
  await page.goto('https://www.wikipedia.org/');

  // 2) Assert one obvious “page loaded” element
  await expect(page.getByRole('heading', { name: 'Wikipedia' })).toBeVisible();

  // Step 3: one action that opens a new tab. I was confused by the waitforevent being placed before the getByRole. I learned that this is necessary to avoid a race condition.
  
  const [newPage] = await Promise.all([
  page.waitForEvent('popup'), // listen first
  page.getByRole('button', { name: 'Who is hiding in the globe?' }).click(), // trigger
]);

  // Step 4: one result, on the new tab. For this step I wanted to use a wildcard but learned that the correct way is with a regex
await expect(newPage).toHaveURL(
  /wikimediafoundation\.org\/wikipedia25\/wikipedia-mascot/);

  // 5) Stop
});
