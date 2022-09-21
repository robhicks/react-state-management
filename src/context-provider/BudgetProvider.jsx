/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react'
import model from '../budget.model'
import { get, set } from 'idb-keyval'
import { copy, reducer, uuid } from '../utils'

const key = 'budget'

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

export const Budget = createContext({})

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(model)

  const loadFromStorage = async () => {
    const storedBudget = await get(key)
    if (storedBudget) setBudget(storedBudget)
  }

  useEffect(() => {
    let mounted = true
    if (mounted) loadFromStorage()
    return () => {
      mounted = false
    }
  }, [])

  const addEmptyTransaction = (itemId) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item } = getItemData(bud, itemId)
      const d = new Date()
      item.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
      set(key, bud)
      return bud
    })
  }

  const changeBudgetName = (ev) => {
    setBudget((cur) => {
      const bud = { ...cur, name: ev.target.value }
      set(key, bud)
      return bud
    })
  }

  const changeCategoryName = (categoryId, name) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const category = findCategory(bud.monthlyBudgets, categoryId)
      category.name = name
      set(key, bud)
      return bud
    })
  }

  const changeItemName = (itemId, name) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item } = getItemData(bud, itemId)
      item.name = name
      set(key, bud)
      return bud
    })
  }

  const changeItemPlannedAmount = (itemId, amount) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item: itm } = getItemData(bud, itemId)
      itm.planned = Number(amount)
      // update the category planned value
      category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
      category.remaining = category.planned - category.actual
      set(key, bud)
      return bud
    })
  }

  const changeTransactionAmount = (txId, amount) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item, transaction } = getTransactionData(bud, txId)
      transaction.amount = Number(amount)
      item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
      item.remaining = item.planned - item.actual
      category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
      category.remaining = category.planned - category.actual
      set(key, bud)
      return bud
    })
  }

  const changeTransactionDate = (txId, date) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, txId)
      transaction.date = date
      set(key, bud)
      return bud
    })
  }

  const changeTransactionSource = (txId, source) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, txId)
      transaction.source = source
      set(key, bud)
      return bud
    })
  }

  const deleteTransaction = (txId) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item } = getTransactionData(budget, txId)
      item.transactions = item.transactions.filter((t) => t.id !== txId)
      item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'))
      item.remaining = item.planned - item.actual
      category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'))
      category.remaining = category.planned - category.actual
      set(key, bud)
      return bud
    })
  }

  return (
    <Budget.Provider
      value={{
        addEmptyTransaction,
        budget,
        changeBudgetName,
        changeCategoryName,
        changeItemName,
        changeItemPlannedAmount,
        changeTransactionAmount,
        changeTransactionDate,
        changeTransactionSource,
        deleteTransaction,
        setBudget
      }}
    >
      {children}
    </Budget.Provider>
  )
}

export const useBudget = () => {
  return useContext(Budget)
}
