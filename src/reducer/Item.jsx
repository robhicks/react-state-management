/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { uuid } from '../utils'
import { mdiPlus } from '@mdi/js'

export default function Item ({ active, budget, category, item, monthlyBudget, dispatch }) {
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(item.planned)

  useEffect(() => {
    if (active === 'actual') setAmount(item.actual)
    if (active === 'planned') setAmount(item.planned)
    if (active === 'remaining') setAmount(item.remaining)
  }, [active, item])

  const changeName = (value) => {
    dispatch({ type: 'CHANGE_ITEM_NAME', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, name: value })
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    dispatch({ type: 'CHANGE_ITEM_PLANNED_AMOUNT', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, planned: value })
  }

  const addEmptyTx = () => {
    const d = new Date()
    dispatch({ type: 'ADD_EMPTY_TRANSACTION', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, itemId: item.id, transaction: { amount: 0, date: d.toISOString().substring(0, 10), id: uuid() } })
  }

  return (
    <div className="bg-slate-50 mb-2 p-1">
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{amount}</div>
      </div>
      <div className="pl-6">Planned: <input type="number" value={planned} onInput={changePlanned} /></div>
      <div className="pl-6 flex gap-1 items-center">Transactions <button className="h-5 w-5" onClick={addEmptyTx}><svg height="20" width="20"><path d={mdiPlus}></path></svg></button></div>
      <div className="pl-8">
        {item.transactions.map((tx) =>
          <Transaction budget={budget} category={category} item={item} monthlyBudget={monthlyBudget} dispatch={dispatch} key={tx.id} tx={tx} />
        )}
      </div>
    </div>
  )
}
