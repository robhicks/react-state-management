import { createSlice, configureStore } from '@reduxjs/toolkit'
import { copy, dateReviver, deserialize, getCategoryData, getItemData, getTransactionData, serialize, uuid } from '../utils'
import add from 'date-fns/add'
import getModel, { genMonthlyBudget } from '../utils/budget-model-generator'

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
      const mb = genMonthlyBudget(month, year)
      mb.month = month
      mb.year = year
      const idx = bud.monthlyBudgets.push(mb)
      const currentMonthlyBudget = bud.monthlyBudgets[idx - 1]
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate), currentMonthlyBudget }
      return ns
    },
    changeBudgetName (state, { payload }) {
      const ns = { ...state, name: payload }
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
      const { item } = getItemData(bud, itemId)
      item.planned = +amount
      const ns = { ...state, ...bud, currentDate: currentDate(state.currentDate) }
      return ns
    },
    changeTransactionAmount (state, { payload: { txId, amount } }) {
      const bud = copy(state)
      const { transaction } = getTransactionData(bud, txId)
      transaction.amount = amount
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
      const { item } = getTransactionData(bud, txId)
      item.transactions = item.transactions.filter((t) => t.id !== txId)
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
