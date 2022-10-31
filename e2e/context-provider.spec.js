import { writeFile } from 'fs/promises'
import { test, expect } from '@playwright/test'
import { join } from 'path'

const root = process.cwd()

test('test', async ({ page }) => {
  await page.goto('http://localhost:4173/03-context-provider')
  await expect(page).toHaveURL('http://localhost:4173/03-context-provider')

  await page.locator('#previous-month').click()
  await page.locator('#previous-month').click()
  await page.locator('#next-month').click()
  await page.locator('#next-month').click()
  await page.locator('#next-month').click()
  await page.locator('button:has-text("Create Monthly Budget")').click()
  await page.locator('.Income').click()
  await page.locator('.Employment').click()
  await page.locator('input[type="number"]').first().click()
  await page.locator('input[type="number"]').first().click()
  await page.locator('input[type="number"]').first().click()
  await page.locator('input[type="number"]').first().click()
  await page.locator('text=Actual').click()
  await page.locator(':nth-match([placeholder="Amount"], 1)').click()

  const perfEntries = await page.evaluate(() => performance.getEntries())

  const largestContentfulPaint = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((l) => {
        const entries = l.getEntries()
        // the last entry is the largest contentful paint
        const largestPaintEntry = entries.at(-1)
        resolve(largestPaintEntry.startTime)
      }).observe({
        type: 'largest-contentful-paint',
        buffered: true
      })
    })
  })

  const totalBlockingTime = await page.evaluate(() => {
    return new Promise((resolve) => {
      let totalBlockingTime = 0
      new PerformanceObserver(function (list) {
        const perfEntries = list.getEntries()
        for (const perfEntry of perfEntries) {
          totalBlockingTime += perfEntry.duration - 50
        }
        resolve(totalBlockingTime)
      }).observe({ type: 'longtask', buffered: true })

      // Resolve promise if there haven't been long tasks
      setTimeout(() => resolve(totalBlockingTime), 5000)
    })
  })

  await writeFile(join(root, 'perf-results', 'context.json'), JSON.stringify({ perfEntries, largestContentfulPaint, totalBlockingTime }))
})
