/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiDelete } from '@mdi/js'
import { copy, getTransactionData, reducer } from '../utils'

export default function Transaction ({ budget, setBudget, transaction }) {
  const [maxDate, setMaxDate] = useState()
  const [minDate, setMinDate] = useState()

  useEffect(() => {
    const d = budget.currentDate ? new Date(budget.currentDate) : new Date()
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1)
    const lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0)
    const formattedFirstDay = firstDay.toISOString().substring(0, 10)
    const formattedLastDayOfMonth = lastDayOfMonth.toISOString().substring(0, 10)
    setMinDate(formattedFirstDay)
    setMaxDate(formattedLastDayOfMonth)
  }, [])

  const delTx = () => {
    const bud = copy(budget)
    const { category, item } = getTransactionData(bud, transaction.id)
    item.transactions = item.transactions.filter((t) => t.id !== transaction.id)
    item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    item.remaining = item.planned - item.actual
    category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    category.remaining = category.planned - category.actual
    setBudget({ ...budget, ...bud })
  }

  const dateChangeHandler = (ev) => {
    const bud = copy(budget)
    const { transaction: tx } = getTransactionData(bud, transaction.id)
    tx.date = ev.target.value
    setBudget({ ...budget, ...bud })
  }
  const sourceChangeHandler = (ev) => {
    const bud = copy(budget)
    const { transaction: tx } = getTransactionData(bud, transaction.id)
    tx.source = ev.target.value
    setBudget({ ...budget, ...bud })
  }
  const amountChangeHandler = (ev) => {
    const bud = copy(budget)
    const { category, item, transaction: tx } = getTransactionData(bud, transaction.id)
    tx.amount = Number(ev.target.value)
    item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    item.remaining = item.planned - item.actual
    category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    category.remaining = category.planned - category.actual
    setBudget({ ...budget, ...bud })
  }

  return (
    <div className="grid grid-cols-4 gap-2 mb-1">
      <input type="date" value={transaction.date} onChange={dateChangeHandler} min={minDate} max={maxDate} />
      <input type="text" placeholder="Source" value={transaction.source} onInput={sourceChangeHandler} />
      <input type="number" placeholder="Amount" value={transaction.amount} onInput={amountChangeHandler} />
      <button className="w-5 h-5" onClick={delTx}><svg height="20" width="20"><path d={mdiDelete}></path></svg></button>
    </div>
  )
}
