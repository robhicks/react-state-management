import { writeFile } from 'fs/promises'
import { test, expect } from '@playwright/test'
import { join } from 'path'

const root = process.cwd()

test('test', async ({ page }) => {
  // Go to http://localhost:5173/
  await page.goto('http://localhost:5173/')

  // Click text=01-custom-hook-state-prop-drilling
  await page.locator('text=02-custom-hook').click()
  await expect(page).toHaveURL('http://localhost:5173/02-custom-hook')

  await page.locator('#next-month').click()
  await page.locator('button:has-text("Create Monthly Budget")').click()

  const perfEntries = await page.evaluate(() => performance.getEntries())

  await writeFile(join(root, 'perf-results', 'customHook.json'), JSON.stringify(perfEntries))
})
