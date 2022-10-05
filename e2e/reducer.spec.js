import { writeFile } from 'fs/promises'
import { test, expect } from '@playwright/test'
import { join } from 'path'

const root = process.cwd()

test('test', async ({ page }) => {
  // Go to http://localhost:5173/
  await page.goto('http://localhost:5173/')

  // Click text=04-use-reducer
  await page.locator('text=04-use-reducer').click()
  await expect(page).toHaveURL('http://localhost:5173/04-use-reducer')

  await page.locator('#next-month').click()
  await page.locator('button:has-text("Create Monthly Budget")').click()

  const perfEntries = await page.evaluate(() => performance.getEntries())

  await writeFile(join(root, 'perf-results', 'reducer.json'), JSON.stringify(perfEntries))
})
