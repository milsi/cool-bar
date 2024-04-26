import { test, expect } from '@playwright/test';

const today = new Date().toISOString().split('T')[0];

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('link', { name: 'cool bar.' })).toBeVisible();
  await page.getByLabel('menu').click();
  await page.getByRole('link', { name: 'Workouts' }).click();
  await expect(page.locator('addWorkout')).toBeVisible();
  await page.locator('addWorkout').click();
  await expect(page.getByLabel('date')).toHaveValue(today);
  await page.getByLabel('movement').selectOption('Barbell Squat');
  await page.getByPlaceholder('Reps').first().click();
  await page.getByPlaceholder('Reps').first().fill('5');
  await page.getByPlaceholder('Weight').first().click();
  await page.getByPlaceholder('Weight').first().fill('20');
  await page.getByPlaceholder('Reps').nth(1).click();
  await page.getByPlaceholder('Reps').nth(1).fill('5');
  await page.getByPlaceholder('Weight').nth(1).click();
  await page.getByPlaceholder('Weight').nth(1).fill('60');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#app')).toContainText('Barbell Squat');
});
