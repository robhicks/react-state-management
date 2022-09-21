/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiDelete } from '@mdi/js'
import { getTransactionData } from './useBudget'
import { copy, reducer } from '../utils'

export default function Transaction ({ budget, saveBudget, setBudget, tx }) {
  const [maxDate, setMaxDate] = useState()
  const [minDate, setMinDate] = useState()

  useEffect(() => {
    const d = new Date()
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1)
    const lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0)
    const formattedFirstDay = firstDay.toISOString().substring(0, 10)
    const formattedLastDayOfMonth = lastDayOfMonth.toISOString().substring(0, 10)
    setMinDate(formattedFirstDay)
    setMaxDate(formattedLastDayOfMonth)
  }, [])

  const delTx = () => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item } = getTransactionData(budget, tx.id)
      item.transactions = item.transactions.filter((t) => t.id !== tx.id)
      item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'))
      item.remaining = item.planned - item.actual
      category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'))
      category.remaining = category.planned - category.actual
      saveBudget(bud)
      return bud
    })
  }

  const dateChangeHandler = (ev) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, tx.id)
      transaction.date = ev.target.date
      saveBudget(bud)
      return bud
    })
  }

  const sourceChangeHandler = (ev) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction } = getTransactionData(bud, tx.id)
      transaction.source = ev.target.value
      saveBudget(bud)
      return bud
    })
  }

  const amountChangeHandler = (ev) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item, transaction } = getTransactionData(bud, tx.id)
      transaction.amount = Number(ev.target.value)
      item.actual = item.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
      item.remaining = item.planned - item.actual
      category.actual = category.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
      category.remaining = category.planned - category.actual
      saveBudget(bud)
      return bud
    })
  }

  return (
    <div className="grid grid-cols-4 gap-2 mb-1">
      <input type="date" value={tx.date} onChange={dateChangeHandler} min={minDate} max={maxDate} />
      <input type="text" placeholder="Source" value={tx.source} onInput={sourceChangeHandler} />
      <input type="number" placeholder="Amount" value={tx.amount} onInput={amountChangeHandler} />
      <button className="w-5 h-5" onClick={delTx}><svg height="20" width="20"><path d={mdiDelete}></path></svg></button>
    </div>
  )
}
