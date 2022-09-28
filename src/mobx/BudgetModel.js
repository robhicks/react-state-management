import { makeAutoObservable } from 'mobx'
import { copy, getCategoryData, getItemData, getTransactionData, reducer, uuid } from '../utils'
import getModel from '../utils/budget-model-generator'

const model = getModel()

export class BudgetModel {
  constructor (model) {
    this.active = 'planned'
    this.currentDate = new Date()
    this.id = model.id
    this.monthlyBudgets = model.monthlyBudgets
    this.name = model.name
    makeAutoObservable(this)
  }

  addEmptyTransaction = (itemId) => {
    const { item } = getItemData(this, itemId)
    const d = new Date()
    item.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
  }

  addMonthlyBudget = () => {
    const month = this.currentDate.getMonth()
    const year = this.currentDate.getFullYear()
    const mb = copy(model.monthlyBudgets[0])
    mb.month = month
    mb.year = year
    this.monthlyBudgets.push(mb)
  }

  changeBudgetName = (name) => {
    this.name = name
  }

  changeCategoryName = (categoryId, name) => {
    const { category } = getCategoryData(this, categoryId)
    category.name = name
  }

  changeItemName = (itemId, name) => {
    const { item } = getItemData(this, itemId)
    item.name = name
  }

  changeItemPlannedAmount = (itemId, amount) => {
    const { category, item } = getItemData(this, itemId)
    item.planned = Number(amount)
    category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
    category.remaining = category.planned - category.actual
  }

  changeTransactionAmount = (txId, amount) => {
    const { category, item, transaction } = getTransactionData(this, txId)
    transaction.amount = amount
    item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    item.remaining = item.planned - item.actual
    category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    category.remaining = category.planned - category.actual
  }

  changeTransactionDate = (txId, date) => {
    const { transaction } = getTransactionData(this, txId)
    transaction.date = date
  }

  changeTransactionSource = (txId, source) => {
    const { transaction } = getTransactionData(this, txId)
    transaction.source = source
  }

  deleteTransaction = (txId) => {
    const { category, item } = getTransactionData(this, txId)
    item.transactions = item.transactions.filter((t) => t.id !== txId)
    item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    item.remaining = item.planned - item.actual
    category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    category.remaining = category.planned - category.actual
  }

  setActive = (filter) => {
    this.active = filter
  }

  setCurrentDate = (date) => {
    this.currentDate = date
  }

  get currentMonth () {
    return this.currentDate.getMonth()
  }

  get currentMonthlyBudget () {
    return this.monthlyBudgets.find((mb) => mb.month === this.currentMonth && mb.year === this.currentYear)
  }

  get currentYear () {
    return this.currentDate.getFullYear()
  }
}

const store = new BudgetModel(model)

export default store
