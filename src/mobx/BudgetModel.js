import { autorun, makeAutoObservable } from 'mobx'
import model from '../budget.model'
import { get, set } from 'idb-keyval'
import { copy, getCategoryData, getItemData, getTransactionData, reducer, uuid } from '../utils'

const key = 'budget'

const save = (storageObject) => {
  const copied = copy(storageObject)
  // console.log('copied', copied)
  set(key, copied)
}

export class BudgetModel {
  constructor (model) {
    this.active = 'planned'
    this.currentDate = new Date()
    this.id = model.id
    this.monthlyBudgets = model.monthlyBudgets
    this.name = model.name
    makeAutoObservable(this)
    this.loadFromStorage()
  }

  addEmptyTransaction = (itemId) => {
    const { item } = getItemData(this, itemId)
    const d = new Date()
    item.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  changeBudgetName = (name) => {
    this.name = name
  }

  changeCategoryName = (categoryId, name) => {
    const { category } = getCategoryData(this, categoryId)
    category.name = name
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  changeItemName = (itemId, name) => {
    const { item } = getItemData(this, itemId)
    item.name = name
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  changeItemPlannedAmount = (itemId, amount) => {
    const { category, item } = getItemData(this, itemId)
    item.planned = Number(amount)
    category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
    category.remaining = category.planned - category.actual
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  changeTransactionAmount = (txId, amount) => {
    const { category, item, transaction } = getTransactionData(this, txId)
    transaction.amount = amount
    item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    item.remaining = item.planned - item.actual
    category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    category.remaining = category.planned - category.actual
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  changeTransactionDate = (txId, date) => {
    const { transaction } = getTransactionData(this, txId)
    transaction.date = date
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  changeTransactionSource = (txId, source) => {
    const { transaction } = getTransactionData(this, txId)
    transaction.source = source
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  deleteTransaction = (txId) => {
    const { category, item } = getTransactionData(this, txId)
    item.transactions = item.transactions.filter((t) => t.id !== txId)
    item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    item.remaining = item.planned - item.actual
    category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    category.remaining = category.planned - category.actual
    save({ id: this.id, name: this.name, monthlyBudgets: this.monthlyBudgets })
  }

  async loadFromStorage () {
    const storedBudget = await get(key)
    if (storedBudget) {
      this.name = storedBudget.name
      this.monthlyBudgets = storedBudget.monthlyBudgets
    }
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

autorun(() => {
  const storageObject = copy({ id: store.id, name: store.name, monthlyBudgets: store.monthlyBudgets })
  save(storageObject)
})

export default store
