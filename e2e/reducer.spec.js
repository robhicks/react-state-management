import { writeFile } from 'fs/promises'
import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:5173/
  await page.goto('http://localhost:5173/')

  // Click text=04-use-reducer
  await page.locator('text=04-use-reducer').click()
  await expect(page).toHaveURL('http://localhost:5173/04-use-reducer')

  await page.locator('#previous-month').click()
  await page.locator('button:has-text("Create Monthly Budget")').click()
  await page.locator('#next-month').click()
  await page.locator('#next-month').click()
  await page.locator('button:has-text("Create Monthly Budget")').click()

  const navigationTimingJson = await page.evaluate(() => performance.getEntriesByType('navigation'))

  await writeFile('reducer-navigation-timing.json', JSON.stringify(navigationTimingJson))

  const resourceTimingJson = await page.evaluate(() => performance.getEntriesByType('resource'))

  await writeFile('reducer-resource-timing.json', JSON.stringify(resourceTimingJson))

  const paintTimingJson = await page.evaluate(() => performance.getEntriesByType('paint'))
  await writeFile('reducer-paint-timing.json', JSON.stringify(paintTimingJson))


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

  await writeFile('reducer-lcp.json', JSON.stringify(largestContentfulPaint))

  const cummulativeLayoutShift = await page.evaluate(() => {
    return new Promise((resolve) => {
      let CLS = 0

      new PerformanceObserver((l) => {
        const entries = l.getEntries()

        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            CLS += entry.value
          }
        })

        resolve(CLS)
      }).observe({
        type: 'layout-shift',
        buffered: true
      })
    })
  })

  await writeFile('reducer-cls.json', JSON.stringify(cummulativeLayoutShift))

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

  await writeFile('reducer-total-blocking-time.json', JSON.stringify(totalBlockingTime))
})
