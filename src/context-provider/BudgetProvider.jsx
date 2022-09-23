/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react'
import model from '../budget.model'
import { get, set } from '../db'
import { copy, reducer, uuid, getCategoryData, getItemData, getTransactionData } from '../utils'

const key = 'budget'

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
      const { category } = getCategoryData(bud, categoryId)
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
