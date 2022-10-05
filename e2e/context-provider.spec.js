import { writeFile } from 'fs/promises'
import { test, expect } from '@playwright/test'
import { join } from 'path'

const root = process.cwd()

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/03-context-provider')
  await expect(page).toHaveURL('http://localhost:5173/03-context-provider')

  await page.locator('#next-month').click()
  await page.locator('button:has-text("Create Monthly Budget")').click()

  const perfEntries = await page.evaluate(() => performance.getEntries())

  await writeFile(join(root, 'perf-results', 'context.json'), JSON.stringify(perfEntries))
})
