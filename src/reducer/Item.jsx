/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { currency, reducer } from '../utils'

export default function Item ({ budget, item, dispatch }) {
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(item.planned)
  const [actual, setActual] = useState(0)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const actual = item?.transactions?.reduce((p, c) => reducer(p, c, 'amount'), 0) || 0
    setActual(actual)
    setRemaining(planned - actual)
  }, [item])

  useEffect(() => {
    if (budget.active === 'actual') setAmount(actual)
    if (budget.active === 'planned') setAmount(planned)
    if (budget.active === 'remaining') setAmount(remaining)
  }, [budget.active, actual, planned, remaining])

  const changeName = (value) => {
    dispatch({ type: 'CHANGE_ITEM_NAME', itemId: item.id, name: value })
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    dispatch({ type: 'CHANGE_ITEM_PLANNED_AMOUNT', itemId: item.id, amount: value })
  }

  const addEmptyTx = () => {
    dispatch({ type: 'ADD_EMPTY_TRANSACTION', itemId: item.id })
  }

  return (
    <div className="w-8/12 mx-auto py-4 h-full">
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{currency(amount)}</div>
      </div>
      <div className="pl-6">Planned: <input type="number" value={planned} onInput={changePlanned} /></div>
      <div className="pl-6 flex gap-1 items-center">Transactions <button className="h-5 w-5" onClick={addEmptyTx}><svg height="20" width="20"><path d={mdiPlus}></path></svg></button></div>
      <div className="pl-8">
        {item.transactions.map((tx) =>
          <Transaction budget={budget} item={item} dispatch={dispatch} key={tx.id} transaction={tx} />
        )}
      </div>
    </div>
  )
}
