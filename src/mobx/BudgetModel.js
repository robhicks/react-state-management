import { makeAutoObservable } from 'mobx'
import { copy, getCategoryData, getItemData, getTransactionData, uuid } from '../utils'
import getModel, { genMonthlyBudget } from '../utils/budget-model-generator'
import { amountCalculator } from '../utils/budget-utils'

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

  changeCategoryName = (categoryId, name) => {
    const { category } = getCategoryData(this, categoryId)
    category.name = name
  }

  changeItemName = (itemId, name) => {
    const { item } = getItemData(this, itemId)
    item.name = name
  }

  changeItemPlannedAmount = (itemId, amount) => {
    const budget = copy(this)
    const { item } = getItemData(budget, itemId)
    item.planned = Number(amount)
    this.monthlyBudgets = budget.monthlyBudgets
  }

  changeTransactionAmount = (txId, amount) => {
    const budget = copy(this)
    const { transaction } = getTransactionData(budget, txId)
    transaction.amount = amount
    this.monthlyBudgets = budget.monthlyBudgets
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

  get currentMonthlyBudget () {
    let monthlyBudget = this.monthlyBudgets.find((mb) => mb.month === this.currentMonth && mb.year === this.currentYear)
    if (monthlyBudget) monthlyBudget = amountCalculator(monthlyBudget)
    return monthlyBudget
  }

  get currentMonth () {
    return this.currentDate.getMonth()
  }

  get currentYear () {
    return this.currentDate.getFullYear()
  }
}

const store = new BudgetModel(model)

export default store
