/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { getItemData } from './useBudget'
import { copy, reducer, uuid } from '../utils'

export default function Item ({ active, budget, item, saveBudget, setBudget }) {
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(item.planned)

  useEffect(() => {
    const { item: itm } = getItemData(budget, item.id)
    if (active === 'actual') setAmount(itm.actual)
    if (active === 'planned') setAmount(itm.planned)
    if (active === 'remaining') setAmount(itm.remaining)
  }, [active, budget, item])

  const changeName = (value) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item: itm } = getItemData(bud, item.id)
      itm.name = value
      saveBudget(bud)
      return bud
    })
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)

    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item: itm } = getItemData(bud, item.id)
      itm.planned = Number(amount)
      // update the category planned value
      category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
      category.remaining = category.planned - category.actual
      saveBudget(bud)
      return bud
    })
  }

  const addEmptyTx = () => {
    setBudget((cur) => {
      const bud = copy(cur)
      const d = new Date()
      const { item: itm } = getItemData(bud, item.id)
      itm.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
      saveBudget(bud)
      return bud
    })
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
          <Transaction budget={budget} key={tx.id} saveBudget={saveBudget} setBudget={setBudget} tx={tx} />
        )}
      </div>
    </div>
  )
}
