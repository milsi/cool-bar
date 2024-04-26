import { test, expect } from '@playwright/test';

const date = new Date();

const today = date.toISOString().split('T')[0];

date.setDate(date.getDate() + 7);
const nextWeek = date.toISOString().split('T')[0];

test('add a new workout', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('link', { name: 'cool bar.' })).toBeVisible();
  await page.getByLabel('menu').click();
  await page.getByRole('link', { name: 'Workouts' }).click();
  await expect(page.getByLabel('addWorkout')).toBeVisible();
  await page.getByLabel('addWorkout').click();
  await expect(page.getByLabel('date')).toHaveValue(today);
  await expect(page.getByRole('button', { name: 'Save' })).toBeDisabled();
  await page.getByLabel('date').fill(nextWeek);
  await page.getByLabel('movement').selectOption('Barbell Squat');
  await page.getByPlaceholder('Reps').first().click();
  await page.getByPlaceholder('Reps').first().fill('5');
  await page.getByPlaceholder('Weight').first().click();
  await page.getByPlaceholder('Weight').first().fill('20');
  await page.getByPlaceholder('Reps').nth(1).click();
  await page.getByPlaceholder('Reps').nth(1).fill('5');
  await page.getByPlaceholder('Weight').nth(1).click();
  await page.getByPlaceholder('Weight').nth(1).fill('60');
  await expect(page.getByRole('button', { name: 'Save' })).toBeEnabled();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#app')).toContainText(today);
  await expect(page.locator('#app')).toContainText('Barbell Squat');
});
