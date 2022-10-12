async function pageLoad (page) {
  await page.goto('http://localhost:5173/02-custom-hook')
  // Click .w-6 >> nth=0
  await page.locator('.w-6').first().click()

  // Click button:has-text("Create Monthly Budget")
  await page.locator('button:has-text("Create Monthly Budget")').click()

  // Click text=August 2022
  await page.locator('text=August 2022').click()

  // Click button:nth-child(3) >> nth=0
  await page.locator('button:nth-child(3)').first().click()

  // Click button:has-text("Create Monthly Budget")
  await page.locator('button:has-text("Create Monthly Budget")').click()

  // Click text=October 2022
  await page.locator('text=October 2022').click()

  // Click text=0Income >> button
  await page.locator('text=0Income >> button').click()

  // Click text=0Employment >> button
  await page.locator('text=0Employment >> button').click()

  // Click text=Paycheck #10Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #10Planned: Transactions >> input[type="number"]').click()

  // Fill text=Paycheck #10Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #10Planned: Transactions >> input[type="number"]').fill('2500')

  // Click text=Paycheck #20Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #20Planned: Transactions >> input[type="number"]').click()

  // Fill text=Paycheck #20Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #20Planned: Transactions >> input[type="number"]').fill('2500')

  // Click text=Paycheck #12500Planned: Transactions >> button
  await page.locator('text=Paycheck #12500Planned: Transactions >> button').click()

  // Fill input[type="date"]
  await page.locator('input[type="date"]').fill('2022-09-08')

  // Click [placeholder="Source"]
  await page.locator('[placeholder="Source"]').click()

  // Fill [placeholder="Source"]
  await page.locator('[placeholder="Source"]').fill('Work')

  // Click [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').click()

  // Fill [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').fill('2503')

  // Click text=Paycheck #22500Planned: Transactions >> button
  await page.locator('text=Paycheck #22500Planned: Transactions >> button').click()

  // Fill text=Paycheck #22500Planned: Transactions >> input[type="date"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> input[type="date"]').fill('2022-09-22')

  // Click text=Paycheck #22500Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> [placeholder="Source"]').click()

  // Fill text=Paycheck #22500Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> [placeholder="Source"]').fill('Work')

  // Click text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]').click()

  // Fill text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]').fill('2500')

  // Click text=5000EmploymentPaycheck #12500Planned: Transactions Paycheck #22500Planned: Trans >> button >> nth=0
  await page.locator('text=5000EmploymentPaycheck #12500Planned: Transactions Paycheck #22500Planned: Trans >> button').first().click()

  // Click text=0Expense >> button
  await page.locator('text=0Expense >> button').click()

  // Click text=0Giving >> button
  await page.locator('text=0Giving >> button').click()

  // Click text=Planned: >> nth=0
  await page.locator('text=Planned:').first().click()

  // Click text=Tithing0Planned: Transactions >> input[type="number"]
  await page.locator('text=Tithing0Planned: Transactions >> input[type="number"]').click()

  // Fill text=Tithing0Planned: Transactions >> input[type="number"]
  await page.locator('text=Tithing0Planned: Transactions >> input[type="number"]').fill('500')

  // Click text=Fast Offerings0Planned: Transactions >> input[type="number"]
  await page.locator('text=Fast Offerings0Planned: Transactions >> input[type="number"]').click()

  // Fill text=Fast Offerings0Planned: Transactions >> input[type="number"]
  await page.locator('text=Fast Offerings0Planned: Transactions >> input[type="number"]').fill('50')

  // Click text=Other Charitable Contributions0Planned: Transactions >> input[type="number"]
  await page.locator('text=Other Charitable Contributions0Planned: Transactions >> input[type="number"]').click()

  // Fill text=Other Charitable Contributions0Planned: Transactions >> input[type="number"]
  await page.locator('text=Other Charitable Contributions0Planned: Transactions >> input[type="number"]').fill('8')
};

module.exports = { pageLoad }
