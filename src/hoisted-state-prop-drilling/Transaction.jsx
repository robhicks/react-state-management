/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiDelete } from '@mdi/js'
import { copy, getTransactionData } from '../utils'

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
    setBudget((cur) => {
      const bud = copy(cur)
      const { item } = getTransactionData(bud, transaction.id)
      item.transactions = item.transactions.filter((t) => t.id !== transaction.id)
      return { ...budget, ...bud }
    })
  }

  const dateChangeHandler = (ev) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction: tx } = getTransactionData(bud, transaction.id)
      tx.date = ev.target.value
      return { ...cur, ...bud }
    })
  }
  const sourceChangeHandler = (ev) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction: tx } = getTransactionData(bud, transaction.id)
      tx.source = ev.target.value
      return { ...cur, ...bud }
    })
  }
  const amountChangeHandler = (ev) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { transaction: tx } = getTransactionData(bud, transaction.id)
      tx.amount = +ev.target.value
      return { ...cur, ...bud }
    })
  }

  // console.log('transaction', transaction)

  return (
    <div className="grid grid-cols-4 gap-2 mb-1 items-center">
      <input type="date" value={transaction.date} onChange={dateChangeHandler} min={minDate} max={maxDate} />
      <input type="text" placeholder="Source" value={transaction.source} onInput={sourceChangeHandler} />
      <input type="number" placeholder="Amount" value={transaction.amount} onInput={amountChangeHandler} />
      <button className="w-5 h-5" onClick={delTx}><svg height="20" width="20"><path d={mdiDelete}></path></svg></button>
    </div>
  )
}
