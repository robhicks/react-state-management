import { reducer as arrayReducer } from '../utils'
import { set } from 'idb-keyval'

const copy = (obj) => JSON.parse(JSON.stringify(obj))
const key = 'budget'

const reducer = (state, action) => {
  // console.log('action', action)
  switch (action.type) {
    case 'LOAD_FROM_STORAGE': {
      return { ...state, ...action.data }
    }
    case 'CHANGE_BUDGET_NAME': {
      const newState = { ...state, name: action.name }
      set(key, newState)
      return newState
    }
    case 'UPDATE_CATEGORY_NAME': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      category.name = action.name
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'CHANGE_ITEM_NAME': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      item.name = action.name
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'CHANGE_ITEM_PLANNED_AMOUNT': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      item.planned = action.planned
      category.planned = category.items.reduce((p, c) => arrayReducer(p, c, 'planned'))
      category.remaining = category.planned - category.actual
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'ADD_EMPTY_TRANSACTION': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      item.transactions.push(action.transaction)
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'DELETE_TRANSACTION': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      item.transactions = item.transactions.filter((tx) => tx.id !== action.transactionId)
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'CHANGE_TRANSACTION_DATE': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      const transaction = item.transactions.find((tx) => tx.id === action.transactionId)
      transaction.source = action.source
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'CHANGE_TRANSACTION_SOURCE': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      const transaction = item.transactions.find((tx) => tx.id === action.transactionId)
      transaction.source = action.source
      const newState = { ...state, ...budget }
      set(key, newState)
      return newState
    }
    case 'CHANGE_TRANSACTION_AMOUNT': {
      const budget = copy(state)
      const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === action.monthlyBudgetId)
      const category = monthlyBudget.categories.income.find((cat) => cat.id === action.categoryId) || monthlyBudget.categories.expense.find((cat) => cat.id === action.categoryId)
      const item = category.items.find((i) => i.id === action.itemId)
      const transaction = item.transactions.find((tx) => tx.id === action.transactionId)
      transaction.amount = action.amount

      item.actual = item.transactions.reduce((p, c) => arrayReducer(p, c, 'amount'), 0)
      category.actual = category.items.reduce((p, c) => arrayReducer(p, c, 'actual'), 0)
      item.remaining = item.planned - item.actual
      category.remaining = category.planned - category.actual

      const newState = { ...state, ...budget }
      console.log('newState', newState)
      set(key, newState)
      return newState
    }
    default:
      throw new Error()
  }
}

export default reducer
