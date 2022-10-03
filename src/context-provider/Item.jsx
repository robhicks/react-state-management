/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { useBudget } from './BudgetProvider'
import { currency } from '../utils'

export default function Item ({ item }) {
  const { addEmptyTransaction, budget, changeItemName, changeItemPlannedAmount } = useBudget()
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (budget.active === 'actual') setAmount(item.actual)
    if (budget.active === 'planned') setAmount(item.planned)
    if (budget.active === 'remaining') setAmount(item.remaining)
  }, [budget.active, item.actual, item.planned, item.remaining])

  const changeName = (value) => {
    changeItemName(item.id, value)
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    changeItemPlannedAmount(item.id, value)
  }

  const addEmptyTx = () => {
    addEmptyTransaction(item.id)
  }

  return (
    <div className="bg-slate-50 mb-2 p-1">
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{currency(amount)}</div>
      </div>
      <div className="pl-6">Planned: <input type="number" value={item.planned || ''} onInput={changePlanned} /></div>
      <div className="pl-6 flex gap-1 items-center">Transactions <button className="h-5 w-5" onClick={addEmptyTx}><svg height="20" width="20"><path d={mdiPlus}></path></svg></button></div>
      <div className="pl-8">
        {item.transactions.map((tx) =>
          <Transaction key={tx.id} transaction={tx} />
        )}
      </div>
    </div>
  )
}
