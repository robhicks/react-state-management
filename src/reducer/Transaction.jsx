/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiDelete } from '@mdi/js'

export default function Transaction ({ budget, category, item, monthlyBudget, dispatch, tx }) {
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
    dispatch({ type: 'DELETE_TRANSACTION', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, transactionId: tx.id })
  }

  const dateChangeHandler = (ev) => {
    dispatch({ type: 'CHANGE_TRANSACTION_DATE', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, transactionId: tx.id, date: ev.target.value })
  }
  const sourceChangeHandler = (ev) => {
    dispatch({ type: 'CHANGE_TRANSACTION_SOURCE', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, transactionId: tx.id, source: ev.target.value })
  }
  const amountChangeHandler = (ev) => {
    dispatch({ type: 'CHANGE_TRANSACTION_AMOUNT', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, transactionId: tx.id, amount: ev.target.value })
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
