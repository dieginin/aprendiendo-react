// @ts-check
import { expect, test } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('has button', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const button = page.getByRole('button')

  await expect(button).toBeVisible()
})

test('has fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const fact = page.getByRole('paragraph')

  await expect(fact).toBeVisible()
  await expect(fact).not.toBeEmpty()
})

test('has image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const image = page.getByRole('img')

  await expect(image).toBeVisible()
  await expect(image).toHaveAttribute('src')
})

test('button works', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const button = page.getByRole('button')
  const fact = page.getByRole('paragraph')

  const factBefore = await fact.textContent()

  await button.click()
  await page.waitForTimeout(500) // wait for fact to refresh

  const factAfter = await fact.textContent()

  expect(factBefore).not.toBe(factAfter)
})
