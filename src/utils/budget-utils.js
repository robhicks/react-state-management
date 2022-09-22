const getCategoryByCategoryId = (monthlyBudget, categoryId) => monthlyBudget.categories.income.find((cat) => cat.id === categoryId) ||
  monthlyBudget.categories.expense.find((cat) => cat.id === categoryId)

export const findCategory = (monthlyBudgets, categoryId) => {
  const mb = monthlyBudgets.find((mb) => {
    const incomeCategory = mb.categories.income.find((c) => c.id === categoryId)
    const expenseCategory = mb.categories.expense.find((c) => c.id === categoryId)
    return incomeCategory || expenseCategory
  })

  const cat = getCategoryByCategoryId(mb, categoryId)

  return cat
}

const getCategoryByTransactionId = (monthlyBudget, transactionId) => {
  const incomeCategory = monthlyBudget.categories.income.find((c) => c.items.find((item) => item.transactions.find((tx) => tx.id === transactionId)))
  const expenseCategory = monthlyBudget.categories.expense.find((c) => c.items.find((item) => item.transactions.find((tx) => tx.id === transactionId)))
  return incomeCategory || expenseCategory
}

const getMonthlyBudgetByItemId = (budget, itemId) => {
  const mb = budget.monthlyBudgets.find((m) => {
    const incomeCategory = m.categories.income.find((c) => c.items.find((item) => item.id === itemId))
    const expenseCategory = m.categories.expense.find((c) => c.items.find((item) => item.id === itemId))
    return incomeCategory || expenseCategory
  })
  return mb
}

const getMonthlyBudgetByTransactionId = (budget, transactionId) => {
  const mb = budget.monthlyBudgets.find((m) => {
    const incomeCategory = m.categories.income.find((c) => c.items.find((item) => item.transactions.find((tx) => tx.id === transactionId)))
    const expenseCategory = m.categories.expense.find((c) => c.items.find((item) => item.transactions.find((tx) => tx.id === transactionId)))
    return incomeCategory || expenseCategory
  })
  return mb
}

const getCategoryByItemId = (mb, itemId) => {
  const incomeCategory = mb.categories.income.find((c) => c.items.find((item) => item.id === itemId))
  const expenseCategory = mb.categories.expense.find((c) => c.items.find((item) => item.id === itemId))
  const category = incomeCategory || expenseCategory
  return category
}

export const getCategoryData = (budget, categoryId) => {
  const monthlyBudget = budget.monthlyBudgets.find((mb) => getCategoryByCategoryId(mb, categoryId))
  const incomeCategory = monthlyBudget.categories.income.find((c) => c.id === categoryId)
  const expenseCategory = monthlyBudget.categories.expense.find((c) => c.id === categoryId)
  const category = incomeCategory || expenseCategory
  return { category, monthlyBudget }
}

export const getItemData = (budget, itemId) => {
  const monthlyBudget = getMonthlyBudgetByItemId(budget, itemId)
  const category = getCategoryByItemId(monthlyBudget, itemId)
  const item = category.items.find((item) => item.id === itemId)
  return { category, item, monthlyBudget }
}

export const getTransactionData = (budget, transactionId) => {
  const monthlyBudget = getMonthlyBudgetByTransactionId(budget, transactionId)
  const category = getCategoryByTransactionId(monthlyBudget, transactionId)
  const item = category.items.find((it) => it.transactions.find((tx) => tx.id === transactionId))
  const transaction = item.transactions.find((tx) => tx.id === transactionId)
  return { category, item, monthlyBudget, transaction }
}
