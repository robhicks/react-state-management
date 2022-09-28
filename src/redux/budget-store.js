import { createSlice, configureStore } from '@reduxjs/toolkit'
import { copy, dateReviver, deserialize, getCategoryData, getItemData, getTransactionData, reducer, serialize, uuid } from '../utils'
import add from 'date-fns/add'
import getModel from '../utils/budget-model-generator'

const model = getModel()
if (!model.active) model.active = 'planned'
if (!model.currentDate) model.currentDate = serialize(new Date())


const currentDate = (date) => {
  let d = deserialize(date, dateReviver)
  d = add(d, { seconds: 1 })
  const nd = serialize(d)
  return nd
}

const budgetSlice = createSlice({
  name: 'budget',
  initialState: model,
  reducers: {
    addEmptyTransaction (state, { payload: { itemId } }) {
      const bud = copy(state)
      const { item } = getItemData(bud, itemId)
      const d = new Date()
      item.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    addMonthlyBudget (state, { payload }) {
      const bud = copy(state)
      const date = deserialize(state.currentDate, dateReviver)
      const month = date.getMonth()
      const year = date.getFullYear()
      const mb = copy(model.monthlyBudgets[0])
      mb.month = month
      mb.year = year
      bud.monthlyBudgets.push(mb)
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    changeBudgetName (state, { payload }) {
      const ns = { ...state, name: payload }
      save(ns)
      return ns
    },
    changeCategoryName (state, { payload }) {
      const bud = copy(state)
      const { category } = getCategoryData(bud, payload.categoryId)
      category.name = payload.name
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    changeItemName (state, { payload }) {
      const bud = copy(state)
      const { item } = getItemData(bud, payload.itemId)
      item.name = payload.name
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    changeItemPlannedAmount (state, { payload: { itemId, amount } }) {
      const bud = copy(state)
      const { category, item } = getItemData(bud, itemId)
      item.planned = Number(amount)
      category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
      category.remaining = category.planned - category.actual
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    changeTransactionAmount (state, { payload: { txId, amount } }) {
      const bud = copy(state)
      const { category, item, transaction } = getTransactionData(bud, txId)
      transaction.amount = amount
      item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
      item.remaining = item.planned - item.actual
      category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
      category.remaining = category.planned - category.actual
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },

    changeTransactionDate (state, { payload: { txId, date } }) {
      const bud = copy(state)
      const { transaction } = getTransactionData(bud, txId)
      transaction.date = date
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    changeTransactionSource (state, { payload: { txId, source } }) {
      const bud = copy(state)
      const { transaction } = getTransactionData(bud, txId)
      transaction.source = source
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    deleteTransaction (state, { payload: { txId } }) {
      const bud = copy(state)
      const { category, item } = getTransactionData(bud, txId)
      item.transactions = item.transactions.filter((t) => t.id !== txId)
      item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
      item.remaining = item.planned - item.actual
      category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
      category.remaining = category.planned - category.actual
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    loadFromStorage (state, { payload }) {
      const newState = { ...state, ...payload, currentDate: currentDate(state.currentDate) }
      return newState
    },
    setActive (state, { payload }) {
      const ns = { ...state, active: payload }
      return ns
    },
    setCurrentDate (state, { payload }) {
      const ns = { ...state, currentDate: payload }
      return ns
    },
    setCurrentMonthlyBudget (state, { payload }) {
      return { ...state, currentMonthlyBudget: payload }
    }
  }
})

export const {
  addEmptyTransaction,
  addMonthlyBudget,
  changeBudgetName,
  changeCategoryName,
  changeItemName,
  changeItemPlannedAmount,
  changeTransactionAmount,
  changeTransactionDate,
  changeTransactionSource,
  deleteTransaction,
  loadFromStorage,
  setActive,
  setCurrentDate,
  setCurrentMonthlyBudget
} = budgetSlice.actions

export const store = configureStore({
  reducer: budgetSlice.reducer
})

export const selectBudget = (state) => state
