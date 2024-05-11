import { expect, test } from '@playwright/test';

test('index page has expected header', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Country Selector' })).toBeVisible();
});

test('index page has country select', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('Country')).toBeVisible();
});

test('index page has state select', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('State/Province')).toBeVisible();
});

test('index page has state select disabled', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByPlaceholder('Select a state')).toBeDisabled();
});

test('about page has expected header', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'Discover the World' })).toBeVisible();
});
