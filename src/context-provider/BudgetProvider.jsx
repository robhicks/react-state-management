/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { copy, uuid, getCategoryData, getItemData, getTransactionData } from '../utils'
import getModel from '../utils/budget-model-generator'

export const model = getModel()

export const Budget = createContext({})

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })

  useEffect(() => {
    setBudget((cur) => {
      const d = cur?.currentDate ? new Date(cur.currentDate) : new Date()
      const month = d.getMonth()
      const year = d.getFullYear()
      const currentBudget = cur.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
      return { ...budget, currentBudget }
    })
  }, [budget.currentDate, budget.monthlyBudgets])

  const addMonthlyBudget = (bud) => {
    setBudget((cur) => ({ ...cur, ...bud }))
  }

  const addEmptyTransaction = (itemId) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item } = getItemData(bud, itemId)
      const d = new Date()
      item.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
      return { ...cur, ...bud }
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
      const { item } = getItemData(bud, itemId)
      item.planned = +amount
      return bud
    })
  }

  const changeTransactionAmount = (txId, amount) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, txId)
      transaction.amount = +amount
      return bud
    })
  }

  const changeTransactionDate = (txId, date) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, txId)
      transaction.date = date
      return bud
    })
  }

  const changeTransactionSource = (txId, source) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, txId)
      transaction.source = source
      return bud
    })
  }

  const deleteTransaction = (txId) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item } = getTransactionData(budget, txId)
      item.transactions = item.transactions.filter((t) => t.id !== txId)
      return bud
    })
  }

  return (
    <Budget.Provider
      value={{
        addEmptyTransaction,
        addMonthlyBudget,
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
