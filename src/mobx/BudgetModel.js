import { makeAutoObservable } from 'mobx'
import { getCategoryData, getItemData, getTransactionData, reducer, uuid } from '../utils'
import getModel, { genMonthlyBudget } from '../utils/budget-model-generator'

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
    const mb = genMonthlyBudget(month, year)
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
    const { transaction } = getTransactionData(this, txId)
    transaction.amount = amount
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
    const { item } = getTransactionData(this, txId)
    item.transactions = item.transactions.filter((t) => t.id !== txId)
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
    const monthlyBudget = this.monthlyBudgets.find((mb) => mb.month === this.currentMonth && mb.year === this.currentYear)
    return monthlyBudget
  }

  get currentYear () {
    return this.currentDate.getFullYear()
  }
}

const store = new BudgetModel(model)

export default store
