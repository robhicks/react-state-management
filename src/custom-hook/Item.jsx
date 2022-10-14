/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { copy, currency, getItemData, reducer, uuid } from '../utils'
import { mdiPlus } from '@mdi/js'

export default function Item ({ budget, item, setBudget }) {
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
    const bud = copy(budget)
    const { item: itm } = getItemData(bud, item.id)
    itm.name = value
    setBudget((cur) => ({ ...cur, ...bud }))
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    const bud = copy(budget)
    const { item: itm } = getItemData(bud, item.id)
    itm.planned = +value
    setBudget({ ...budget, ...bud })
  }

  const addEmptyTx = () => {
    const bud = copy(budget)
    const { item: itm } = getItemData(bud, item.id)
    const d = new Date()
    itm.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
    setBudget({ ...budget, ...bud })
  }

  return (
    <div className="bg-slate-50 mb-2 p-1">
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{currency(amount)}</div>
      </div>
      <div className="pl-6">Planned: <input type="number" value={planned} onInput={changePlanned} /></div>
      <div className="pl-6 flex gap-1 items-center">
        Transactions
        <button className="h-5 w-5" onClick={addEmptyTx}>
          <svg height="20" width="20"><path d={mdiPlus}></path></svg>
        </button>
      </div>
      <div className="pl-8">
        {item.transactions.map((tx) =>
          <Transaction budget={budget} setBudget={setBudget} key={tx.id} transaction={tx} />
        )}
      </div>
    </div>
  )
}
