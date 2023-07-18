import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Svelte Google Materialdesign Icons');
});

test('Filled page has expected h1', async ({ page }) => {
  await page.goto('/filled');
  expect(await page.textContent('h1')).toBe('Svelte Google Materialdesign Icons: Filled');
});

test('Outlined page has expected h1', async ({ page }) => {
  await page.goto('/outlined');
  expect(await page.textContent('h1')).toBe('Svelte Google Materialdesign Icons: Outlined');
});

test('Round page has expected h1', async ({ page }) => {
  await page.goto('/round');
  expect(await page.textContent('h1')).toBe('Svelte Google Materialdesign Icons: Round');
});

test('Sharp page has expected h1', async ({ page }) => {
  await page.goto('/sharp');
  expect(await page.textContent('h1')).toBe('Svelte Google Materialdesign Icons: Sharp');
});

test('Two-tone page has expected h1', async ({ page }) => {
  await page.goto('/two-tone');
  expect(await page.textContent('h1')).toBe('Svelte Google Materialdesign Icons: Two-tone');
});
