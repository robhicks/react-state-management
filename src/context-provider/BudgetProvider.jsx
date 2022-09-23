/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react'
import model from '../budget.model'
import { get, set } from '../db'
import { copy, reducer, uuid, getCategoryData, getItemData, getTransactionData } from '../utils'

const key = 'budget'

export const Budget = createContext({})

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(model)

  // load from IndexedDB
  useEffect(() => {
    get(key).then((bud) => {
      if (bud) {
        setBudget(({ ...model, ...bud, currentDate: new Date() }))
      }
    })
  }, [])

  // save to IndexedDb
  useEffect(() => {
    set(key, ({ id: budget.id, name: budget.name, monthlyBudgets: budget.monthlyBudgets }))
  }, [budget.id, budget.name, budget.monthlyBudgets])

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setBudget({ ...budget, currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

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

  const changeActivity = (val) => {
    setBudget((cur) => {
      const bud = { ...cur, active: val }
      return bud
    })
  }

  const changeBudgetName = (val) => {
    setBudget((cur) => {
      const bud = { ...cur, name: val }
      return bud
    })
  }

  const changeCategoryName = (categoryId, name) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category } = getCategoryData(bud, categoryId)
      category.name = name
      return bud
    })
  }

  const changeCurrentDate = (date) => {
    setBudget((cur) => {
      const bud = { ...cur, currentDate: date }
      return bud
    })
  }

  const changeItemName = (itemId, name) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item } = getItemData(bud, itemId)
      item.name = name
      return bud
    })
  }

  const changeItemPlannedAmount = (itemId, amount) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item } = getItemData(bud, itemId)
      item.planned = Number(amount)
      // update the category planned value
      category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
      category.remaining = category.planned - category.actual
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
        changeActivity,
        changeBudgetName,
        changeCategoryName,
        changeCurrentDate,
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
