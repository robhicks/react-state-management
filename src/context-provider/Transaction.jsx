/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiDelete } from '@mdi/js'
import { useBudget } from './BudgetProvider'
import { getTransactionData } from '../utils'

export default function Transaction ({ txId }) {
  const { budget, changeTransactionAmount, changeTransactionDate, changeTransactionSource, deleteTransaction } = useBudget()
  const [maxDate, setMaxDate] = useState()
  const [minDate, setMinDate] = useState()
  const [transaction, setTransaction] = useState({ })

  useEffect(() => {
    const d = new Date()
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1)
    const lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0)
    const formattedFirstDay = firstDay.toISOString().substring(0, 10)
    const formattedLastDayOfMonth = lastDayOfMonth.toISOString().substring(0, 10)
    setMinDate(formattedFirstDay)
    setMaxDate(formattedLastDayOfMonth)
  }, [])

  useEffect(() => {
    const { transaction: tx } = getTransactionData(budget, txId)
    setTransaction(tx)
  }, [budget, txId])

  const delTx = () => {
    deleteTransaction(txId)
  }

  const dateChangeHandler = (ev) => {
    changeTransactionDate(txId, ev.target.value)
  }

  const sourceChangeHandler = (ev) => {
    changeTransactionSource(txId, ev.target.value)
  }

  const amountChangeHandler = (ev) => {
    changeTransactionAmount(txId, ev.target.value)
  }

  return (
    <div className="grid grid-cols-4 gap-2 mb-1">
      <input type="date" value={transaction.date || ''} onChange={dateChangeHandler} min={minDate} max={maxDate} />
      <input type="text" placeholder="Source" value={transaction.source || ''} onInput={sourceChangeHandler} />
      <input type="number" placeholder="Amount" value={transaction.amount || ''} onInput={amountChangeHandler} />
      <button className="w-5 h-5" onClick={delTx}><svg height="20" width="20"><path d={mdiDelete}></path></svg></button>
    </div>
  )
}
