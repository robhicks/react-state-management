async function pageLoad (page) {
  await page.goto('http://localhost:5173/01-hoisted-props')
  // Click input[type="text"]
  await page.locator('input[type="text"]').click()
  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('Family Budgetsss')
  // Click text=0Income >> button
  await page.locator('text=0Income >> button').click()
  // Click text=Employment
  await page.locator('text=Employment').click()
  // Click text=0Employment >> input[type="text"]
  await page.locator('text=0Employment >> input[type="text"]').click()
  // Fill text=0Employment >> input[type="text"]
  await page.locator('text=0Employment >> input[type="text"]').fill('Employments')
  // Click text=0Employments >> button
  await page.locator('text=0Employments >> button').click()
  // Click text=Paycheck #1
  await page.locator('text=Paycheck #1').click()
  // Click text=Paycheck #10 >> input[type="text"]
  await page.locator('text=Paycheck #10 >> input[type="text"]').click()
  // Click text=Paycheck #10 >> input[type="text"]
  await page.locator('text=Paycheck #10 >> input[type="text"]').click()
  // Fill text=Paycheck #10 >> input[type="text"]
  await page.locator('text=Paycheck #10 >> input[type="text"]').fill('Paycheck #12')
  // Click text=Paycheck #120Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #120Planned: Transactions >> input[type="number"]').click()
  // Fill text=Paycheck #120Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #120Planned: Transactions >> input[type="number"]').fill('2500')
  // Click text=Paycheck #20Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #20Planned: Transactions >> input[type="number"]').click()
  // Fill text=Paycheck #20Planned: Transactions >> input[type="number"]
  await page.locator('text=Paycheck #20Planned: Transactions >> input[type="number"]').fill('2500')
  // Click text=Paycheck #122500Planned: Transactions >> button
  await page.locator('text=Paycheck #122500Planned: Transactions >> button').click()
  // Fill input[type="date"]
  await page.locator('input[type="date"]').fill('2022-09-08')
  // Click [placeholder="Source"]
  await page.locator('[placeholder="Source"]').click()
  // Fill [placeholder="Source"]
  await page.locator('[placeholder="Source"]').fill('Work')
  // Click [placeholder="Source"]
  await page.locator('[placeholder="Source"]').click()
  // Click [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').click()
  // Fill [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').fill('2500')
  // Click text=Paycheck #22500Planned: Transactions >> button
  await page.locator('text=Paycheck #22500Planned: Transactions >> button').click()
  // Fill text=Paycheck #22500Planned: Transactions >> input[type="date"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> input[type="date"]').fill('2022-09-22')
  // Click text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]').click()
  // Fill text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Paycheck #22500Planned: Transactions >> [placeholder="Amount"]').fill('2500')
  // Click .relative > button >> nth=0
  await page.locator('.relative > button').first().click()
  // Click text=0Expense >> button
  await page.locator('text=0Expense >> button').click()
  // Click text=0Housing >> button
  await page.locator('text=0Housing >> button').click()
  // Click text=Mortgage Payments0Planned: Transactions >> input[type="number"]
  await page.locator('text=Mortgage Payments0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Mortgage Payments0Planned: Transactions >> input[type="number"]
  await page.locator('text=Mortgage Payments0Planned: Transactions >> input[type="number"]').fill('1000')
  // Click text=Mortgage Payments1000Planned: Transactions >> button
  await page.locator('text=Mortgage Payments1000Planned: Transactions >> button').click()
  // Fill input[type="date"]
  await page.locator('input[type="date"]').fill('2022-09-01')
  // Click [placeholder="Source"]
  await page.locator('[placeholder="Source"]').click()
  // Fill [placeholder="Source"]
  await page.locator('[placeholder="Source"]').fill('Mortgage Company')
  // Click [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').click()
  // Fill [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').fill('1000')
  // Click text=Maintenance0Planned: Transactions >> input[type="number"]
  await page.locator('text=Maintenance0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Maintenance0Planned: Transactions >> input[type="number"]
  await page.locator('text=Maintenance0Planned: Transactions >> input[type="number"]').fill('100')
  // Click text=Maintenance100Planned: Transactions >> button
  await page.locator('text=Maintenance100Planned: Transactions >> button').click()
  // Click text=Maintenance100Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Source"]').click()
  // Fill text=Maintenance100Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Source"]').fill('Home Depot')
  // Press Tab
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Source"]').press('Tab')
  // Fill text=Maintenance100Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Amount"]').fill('53')
  // Press Tab
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Amount"]').press('Tab')
  // Click text=1100HousingMortgage Payments1000Planned: Transactions Maintenance100Planned: Tra >> button >> nth=0
  await page.locator('text=1100HousingMortgage Payments1000Planned: Transactions Maintenance100Planned: Tra >> button').first().click()
  // Click text=0Transportation >> button
  await page.locator('text=0Transportation >> button').click()
  // Click text=Car Purchase0Planned: Transactions >> input[type="number"]
  await page.locator('text=Car Purchase0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Car Purchase0Planned: Transactions >> input[type="number"]
  await page.locator('text=Car Purchase0Planned: Transactions >> input[type="number"]').fill('200')
  // Click text=Car Purchase200Planned: Transactions >> button
  await page.locator('text=Car Purchase200Planned: Transactions >> button').click()
  // Fill input[type="date"]
  await page.locator('input[type="date"]').fill('2022-09-05')
  // Click [placeholder="Source"]
  await page.locator('[placeholder="Source"]').click()
  // Fill [placeholder="Source"]
  await page.locator('[placeholder="Source"]').fill('Car Finance Company')
  // Click [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').click()
  // Fill [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').fill('200')
  // Click text=Fuel0Planned: Transactions >> input[type="number"]
  await page.locator('text=Fuel0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Fuel0Planned: Transactions >> input[type="number"]
  await page.locator('text=Fuel0Planned: Transactions >> input[type="number"]').fill('150')
  // Click text=Fuel150Planned: Transactions >> button
  await page.locator('text=Fuel150Planned: Transactions >> button').click()
  // Fill text=Fuel150Planned: Transactions >> input[type="date"]
  await page.locator('text=Fuel150Planned: Transactions >> input[type="date"]').fill('2022-09-01')
  // Click text=Fuel150Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Fuel150Planned: Transactions >> [placeholder="Source"]').click()
  // Fill text=Fuel150Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Fuel150Planned: Transactions >> [placeholder="Source"]').fill('Costco')
  // Click text=Fuel150Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Fuel150Planned: Transactions >> [placeholder="Source"]').click()
  // Click text=Fuel150Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Fuel150Planned: Transactions >> [placeholder="Amount"]').click()
  // Fill text=Fuel150Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Fuel150Planned: Transactions >> [placeholder="Amount"]').fill('75')
  // Click text=Fuel150Planned: Transactions >> button >> nth=0
  await page.locator('text=Fuel150Planned: Transactions >> button').first().click()
  // Fill input[type="date"] >> nth=2
  await page.locator('input[type="date"]').nth(2).fill('2022-09-02')
  // Click [placeholder="Source"] >> nth=2
  await page.locator('[placeholder="Source"]').nth(2).click()
  // Fill [placeholder="Source"] >> nth=2
  await page.locator('[placeholder="Source"]').nth(2).fill('Smiths')
  // Click [placeholder="Amount"] >> nth=2
  await page.locator('[placeholder="Amount"]').nth(2).click()
  // Fill [placeholder="Amount"] >> nth=2
  await page.locator('[placeholder="Amount"]').nth(2).fill('72')
  // Press Tab
  await page.locator('[placeholder="Amount"]').nth(2).press('Tab')
  // Click text=Maintenance0Planned: Transactions >> input[type="number"]
  await page.locator('text=Maintenance0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Maintenance0Planned: Transactions >> input[type="number"]
  await page.locator('text=Maintenance0Planned: Transactions >> input[type="number"]').fill('100')
  // Click text=Maintenance100Planned: Transactions >> button
  await page.locator('text=Maintenance100Planned: Transactions >> button').click()
  // Fill text=Maintenance100Planned: Transactions >> input[type="date"]
  await page.locator('text=Maintenance100Planned: Transactions >> input[type="date"]').fill('2022-09-05')
  // Press Tab
  await page.locator('text=Maintenance100Planned: Transactions >> input[type="date"]').press('Tab')
  // Fill text=Maintenance100Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Source"]').fill('Havoline Express')
  // Click text=Maintenance100Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Amount"]').click()
  // Fill text=Maintenance100Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Maintenance100Planned: Transactions >> [placeholder="Amount"]').fill('89')
  // Click text=1100Housing >> button
  await page.locator('text=1100Housing >> button').click()
  // Click text=1100HousingMortgage Payments1000Planned: Transactions Maintenance100Planned: Tra >> button >> nth=0
  await page.locator('text=1100HousingMortgage Payments1000Planned: Transactions Maintenance100Planned: Tra >> button').first().click()
  // Click div:nth-child(6) > button
  await page.locator('div:nth-child(6) > button').click()
  // Click text=0Food >> button
  await page.locator('text=0Food >> button').click()
  // Click text=Groceries0Planned: Transactions >> input[type="number"]
  await page.locator('text=Groceries0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Groceries0Planned: Transactions >> input[type="number"]
  await page.locator('text=Groceries0Planned: Transactions >> input[type="number"]').fill('450')
  // Click text=Groceries450Planned: Transactions >> button
  await page.locator('text=Groceries450Planned: Transactions >> button').click()
  // Fill input[type="date"]
  await page.locator('input[type="date"]').fill('2022-09-01')
  // Press Tab
  await page.locator('input[type="date"]').press('Tab')
  // Fill [placeholder="Source"]
  await page.locator('[placeholder="Source"]').fill('Smiths')
  // Press Tab
  await page.locator('[placeholder="Source"]').press('Tab')
  // Fill [placeholder="Amount"]
  await page.locator('[placeholder="Amount"]').fill('125')
  // Click text=Groceries450Planned: Transactions >> button >> nth=0
  await page.locator('text=Groceries450Planned: Transactions >> button').first().click()
  // Fill input[type="date"] >> nth=1
  await page.locator('input[type="date"]').nth(1).fill('2022-09-08')
  // Press Tab
  await page.locator('input[type="date"]').nth(1).press('Tab')
  // Fill [placeholder="Source"] >> nth=1
  await page.locator('[placeholder="Source"]').nth(1).fill('Smiths')
  // Press Tab
  await page.locator('[placeholder="Source"]').nth(1).press('Tab')
  // Fill [placeholder="Amount"] >> nth=1
  await page.locator('[placeholder="Amount"]').nth(1).fill('119')
  // Click text=Groceries450Planned: Transactions >> button >> nth=0
  await page.locator('text=Groceries450Planned: Transactions >> button').first().click()
  // Fill input[type="date"] >> nth=2
  await page.locator('input[type="date"]').nth(2).fill('2022-09-05')
  // Click [placeholder="Source"] >> nth=2
  await page.locator('[placeholder="Source"]').nth(2).click()
  // Fill [placeholder="Source"] >> nth=2
  await page.locator('[placeholder="Source"]').nth(2).fill('Smiths')
  // Click [placeholder="Amount"] >> nth=2
  await page.locator('[placeholder="Amount"]').nth(2).click()
  // Fill [placeholder="Amount"] >> nth=2
  await page.locator('[placeholder="Amount"]').nth(2).fill('101')
  // Click text=Groceries450Planned: Transactions >> button >> nth=0
  await page.locator('text=Groceries450Planned: Transactions >> button').first().click()
  // Fill input[type="date"] >> nth=2
  await page.locator('input[type="date"]').nth(2).fill('2022-09-15')
  // Fill input[type="date"] >> nth=3
  await page.locator('input[type="date"]').nth(3).fill('2022-09-22')
  // Click [placeholder="Source"] >> nth=3
  await page.locator('[placeholder="Source"]').nth(3).click()
  // Fill [placeholder="Source"] >> nth=3
  await page.locator('[placeholder="Source"]').nth(3).fill('Smiths')
  // Press Tab
  await page.locator('[placeholder="Source"]').nth(3).press('Tab')
  // Fill [placeholder="Amount"] >> nth=3
  await page.locator('[placeholder="Amount"]').nth(3).fill('55')
  // Click text=Groceries450Planned: Transactions >> button >> nth=0
  await page.locator('text=Groceries450Planned: Transactions >> button').first().click()
  // Fill input[type="date"] >> nth=4
  await page.locator('input[type="date"]').nth(4).fill('2022-09-29')
  // Click [placeholder="Source"] >> nth=4
  await page.locator('[placeholder="Source"]').nth(4).click()
  // Fill [placeholder="Source"] >> nth=4
  await page.locator('[placeholder="Source"]').nth(4).fill('Smiths')
  // Press Tab
  await page.locator('[placeholder="Source"]').nth(4).press('Tab')
  // Fill [placeholder="Amount"] >> nth=4
  await page.locator('[placeholder="Amount"]').nth(4).fill('43')
  // Click text=Restaurants0Planned: Transactions >> input[type="number"]
  await page.locator('text=Restaurants0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Restaurants0Planned: Transactions >> input[type="number"]
  await page.locator('text=Restaurants0Planned: Transactions >> input[type="number"]').fill('50')
  // Click text=Restaurants50Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Restaurants50Planned: Transactions >> [placeholder="Source"]').click()
  // Fill text=Restaurants50Planned: Transactions >> [placeholder="Source"]
  await page.locator('text=Restaurants50Planned: Transactions >> [placeholder="Source"]').fill('Panda Express')
  // Click text=Restaurants50Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Restaurants50Planned: Transactions >> [placeholder="Amount"]').click()
  // Fill text=Restaurants50Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Restaurants50Planned: Transactions >> [placeholder="Amount"]').fill('43.75')
  // Click text=0Health >> button
  await page.locator('text=0Health >> button').click()
  // Click text=Gym Membership0Planned: Transactions >> input[type="number"]
  await page.locator('text=Gym Membership0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Gym Membership0Planned: Transactions >> input[type="number"]
  await page.locator('text=Gym Membership0Planned: Transactions >> input[type="number"]').fill('25')
  // Click text=Gym Membership25Planned: Transactions >> button
  await page.locator('text=Gym Membership25Planned: Transactions >> button').click()
  // Fill text=Gym Membership25Planned: Transactions >> input[type="date"]
  await page.locator('text=Gym Membership25Planned: Transactions >> input[type="date"]').fill('2022-09-01')
  // Press Tab
  await page.locator('text=Gym Membership25Planned: Transactions >> input[type="date"]').press('Tab')
  // Press Tab
  await page.locator('text=Gym Membership25Planned: Transactions >> [placeholder="Source"]').press('Tab')
  // Fill text=Gym Membership25Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Gym Membership25Planned: Transactions >> [placeholder="Amount"]').fill('22.31')
  // Press Tab
  await page.locator('text=Gym Membership25Planned: Transactions >> [placeholder="Amount"]').press('Tab')
  // Click text=0Insurance >> button
  await page.locator('text=0Insurance >> button').click()
  // Click text=Auto0Planned: Transactions >> input[type="number"]
  await page.locator('text=Auto0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Auto0Planned: Transactions >> input[type="number"]
  await page.locator('text=Auto0Planned: Transactions >> input[type="number"]').fill('55')
  // Click text=House0Planned: Transactions >> input[type="number"]
  await page.locator('text=House0Planned: Transactions >> input[type="number"]').click()
  // Click text=House0Planned: Transactions >> input[type="number"]
  await page.locator('text=House0Planned: Transactions >> input[type="number"]').click()
  // Fill text=House0Planned: Transactions >> input[type="number"]
  await page.locator('text=House0Planned: Transactions >> input[type="number"]').fill('64')
  // Click text=Life0Planned: Transactions >> input[type="number"]
  await page.locator('text=Life0Planned: Transactions >> input[type="number"]').click()
  // Press ArrowLeft
  await page.locator('text=Life0Planned: Transactions >> input[type="number"]').press('ArrowLeft')
  // Fill text=Life0Planned: Transactions >> input[type="number"]
  await page.locator('text=Life0Planned: Transactions >> input[type="number"]').fill('25')
  // Click text=Life25Planned: Transactions >> button
  await page.locator('text=Life25Planned: Transactions >> button').click()
  // Fill text=Life25Planned: Transactions >> input[type="date"]
  await page.locator('text=Life25Planned: Transactions >> input[type="date"]').fill('2022-09-08')
  // Press Tab
  await page.locator('text=Life25Planned: Transactions >> input[type="date"]').press('Tab')
  // Press Tab
  await page.locator('text=Life25Planned: Transactions >> [placeholder="Source"]').press('Tab')
  // Fill text=Life25Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Life25Planned: Transactions >> [placeholder="Amount"]').fill('25.21')
  // Click text=0Savings >> button
  await page.locator('text=0Savings >> button').click()
  // Click text=Emergency Fund0Planned: Transactions >> input[type="number"]
  await page.locator('text=Emergency Fund0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Emergency Fund0Planned: Transactions >> input[type="number"]
  await page.locator('text=Emergency Fund0Planned: Transactions >> input[type="number"]').fill('50')
  // Click text=Charles Schwab0Planned: Transactions >> input[type="number"]
  await page.locator('text=Charles Schwab0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Charles Schwab0Planned: Transactions >> input[type="number"]
  await page.locator('text=Charles Schwab0Planned: Transactions >> input[type="number"]').fill('97')
  // Click text=Zion's Banks0Planned: Transactions >> div >> nth=2
  await page.locator('text=Zion\'s Banks0Planned: Transactions >> div').nth(2).click()
  // Click text=Zion's Banks0Planned: Transactions >> input[type="number"]
  await page.locator('text=Zion\'s Banks0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Zion's Banks0Planned: Transactions >> input[type="number"]
  await page.locator('text=Zion\'s Banks0Planned: Transactions >> input[type="number"]').fill('50')
  // Click text=0Giving >> button
  await page.locator('text=0Giving >> button').click()
  // Click text=Tithing0Planned: Transactions >> div >> nth=2
  await page.locator('text=Tithing0Planned: Transactions >> div').nth(2).click()
  // Click text=Tithing0Planned: Transactions >> input[type="number"]
  await page.locator('text=Tithing0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Tithing0Planned: Transactions >> input[type="number"]
  await page.locator('text=Tithing0Planned: Transactions >> input[type="number"]').fill('500')
  // Click text=Tithing500Planned: Transactions >> button
  await page.locator('text=Tithing500Planned: Transactions >> button').click()
  // Fill text=Tithing500Planned: Transactions >> input[type="date"]
  await page.locator('text=Tithing500Planned: Transactions >> input[type="date"]').fill('2022-09-08')
  // Click text=Tithing500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Tithing500Planned: Transactions >> [placeholder="Amount"]').click()
  // Click text=Tithing500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Tithing500Planned: Transactions >> [placeholder="Amount"]').click()
  // Fill text=Tithing500Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Tithing500Planned: Transactions >> [placeholder="Amount"]').fill('250')
  // Click text=Tithing500Planned: Transactions >> button >> nth=0
  await page.locator('text=Tithing500Planned: Transactions >> button').first().click()
  // Fill text=Tithing500Planned: Transactions >> input[type="date"] >> nth=1
  await page.locator('text=Tithing500Planned: Transactions >> input[type="date"]').nth(1).fill('2022-09-22')
  // Click text=Tithing500Planned: Transactions >> [placeholder="Amount"] >> nth=1
  await page.locator('text=Tithing500Planned: Transactions >> [placeholder="Amount"]').nth(1).click()
  // Fill text=Tithing500Planned: Transactions >> [placeholder="Amount"] >> nth=1
  await page.locator('text=Tithing500Planned: Transactions >> [placeholder="Amount"]').nth(1).fill('250')
  // Click text=Fast Offerings0Planned: Transactions >> input[type="number"]
  await page.locator('text=Fast Offerings0Planned: Transactions >> input[type="number"]').click()
  // Fill text=Fast Offerings0Planned: Transactions >> input[type="number"]
  await page.locator('text=Fast Offerings0Planned: Transactions >> input[type="number"]').fill('50')
  // Click text=Fast Offerings50Planned: Transactions >> button
  await page.locator('text=Fast Offerings50Planned: Transactions >> button').click()
  // Fill text=Fast Offerings50Planned: Transactions >> input[type="date"]
  await page.locator('text=Fast Offerings50Planned: Transactions >> input[type="date"]').fill('2022-09-08')
  // Press Tab
  await page.locator('text=Fast Offerings50Planned: Transactions >> input[type="date"]').press('Tab')
  // Click text=Fast Offerings50Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Fast Offerings50Planned: Transactions >> [placeholder="Amount"]').click()
  // Fill text=Fast Offerings50Planned: Transactions >> [placeholder="Amount"]
  await page.locator('text=Fast Offerings50Planned: Transactions >> [placeholder="Amount"]').fill('50')
  // Click text=Actual
  await page.locator('text=Actual').click()
  // Click .h-\[calc\(100\%-12rem\)\] > div > div:nth-child(2) > button
  await page.locator('.h-\\[calc\\(100\\%-12rem\\)\\] > div > div:nth-child(2) > button').click()
  // Click text=Remaining
  await page.locator('text=Remaining').click()
  // Click text=Actual
  await page.locator('text=Actual').click()
  // Click text=Planned
  await page.locator('text=Planned').click()
};

module.exports = { pageLoad }
