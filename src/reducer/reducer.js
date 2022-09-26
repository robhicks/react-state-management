import { copy, getItemData, getCategoryData, getTransactionData, reducer as amountReducer, uuid } from '../utils'
import model from '../budget.model'

const reducer = (state, action) => {
  // console.log('action', action)
  switch (action.type) {
    case 'LOAD_FROM_STORAGE': {
      const newState = { ...state, ...action.data }
      return newState
    }
    case 'ADD_EMPTY_TRANSACTION': {
      const budget = copy(state)
      const { item } = getItemData(budget, action.itemId)
      const d = new Date()
      item.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
      const newState = { ...state, ...budget }
      return newState
    }
    case 'ADD_MONTHLY_BUDGET': {
      const bud = copy(state)
      const month = state.currentDate.getMonth()
      const year = state.currentDate.getFullYear()
      const mb = copy(model.monthlyBudgets[0])
      mb.month = month
      mb.year = year
      bud.monthlyBudgets.push(mb)
      const newState = { ...state, ...bud }
      return newState
    }
    case 'CHANGE_BUDGET_NAME': {
      const newState = { ...state, name: action.name }
      return newState
    }
    case 'UPDATE_CATEGORY_NAME': {
      const budget = copy(state)
      const { category } = getCategoryData(budget, action.categoryId)
      category.name = action.name
      const newState = { ...state, ...budget }
      return newState
    }
    case 'CHANGE_ITEM_NAME': {
      const budget = copy(state)
      const { item } = getItemData(budget, action.itemId)
      item.name = action.name
      const newState = { ...state, ...budget }
      return newState
    }
    case 'CHANGE_ITEM_PLANNED_AMOUNT': {
      const budget = copy(state)
      const { category, item } = getItemData(budget, action.itemId)
      item.planned = Number(action.amount)
      category.planned = category.items.reduce((p, c) => amountReducer(p, c, 'planned'), 0)
      category.remaining = category.planned - category.actual
      const newState = { ...state, ...budget }
      return newState
    }
    case 'DELETE_TRANSACTION': {
      const budget = copy(state)
      const { item } = getTransactionData(budget, action.transactionId)
      item.transactions = item.transactions.filter((tx) => tx.id !== action.transactionId)
      const newState = { ...state, ...budget }
      return newState
    }
    case 'CHANGE_TRANSACTION_DATE': {
      const budget = copy(state)
      const { transaction } = getTransactionData(budget, action.transactionId)
      transaction.source = action.source
      const newState = { ...state, ...budget }
      return newState
    }
    case 'CHANGE_TRANSACTION_SOURCE': {
      const budget = copy(state)
      const { transaction } = getTransactionData(budget, action.transactionId)
      transaction.source = action.source
      const newState = { ...state, ...budget }
      return newState
    }
    case 'CHANGE_TRANSACTION_AMOUNT': {
      const budget = copy(state)
      const { category, item, transaction } = getTransactionData(budget, action.transactionId)
      transaction.amount = action.amount

      item.actual = item.transactions.reduce((p, c) => amountReducer(p, c, 'amount'), 0)
      category.actual = category.items.reduce((p, c) => amountReducer(p, c, 'actual'), 0)
      item.remaining = item.planned - item.actual
      category.remaining = category.planned - category.actual

      const newState = { ...state, ...budget }
      return newState
    }
    case 'SET_ACTIVITY': {
      return { ...state, active: action.active }
    }
    case 'SET_CURRENT_BUDGET': {
      return { ...state, currentBudget: action.currentBudget }
    }
    case 'SET_CURRENT_DATE': {
      return { ...state, currentDate: action.date }
    }
    default:
      throw new Error()
  }
}

export default reducer
