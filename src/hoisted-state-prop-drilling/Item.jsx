/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { set } from '../db'
import { copy, reducer, uuid } from '../utils'
import { mdiPlus } from '@mdi/js'

export default function Item ({ active, budget, category, item, monthlyBudget, setBudget }) {
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(item.planned)

  useEffect(() => {
    if (active === 'actual') setAmount(item.actual)
    if (active === 'planned') setAmount(item.planned)
    if (active === 'remaining') setAmount(item.remaining)
  }, [active, item])

  const changeName = (value) => {
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    itm.name = value
    set('budget', bud)
    setBudget(bud)
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    itm.planned = value
    // update the category planned value
    cat.planned = cat.items.reduce((p, c) => reducer(p, c, 'planned'))
    cat.remaining = cat.planned - cat.actual
    setBudget(bud)
    set('budget', bud)
  }

  const addEmptyTx = () => {
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    const d = new Date()
    itm.transactions.push({ amount: 0, date: `${d.toISOString().substring(0, 10)}`, id: uuid() })
    setBudget(bud)
    set('budget', bud)
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
          <Transaction budget={budget} category={category} item={item} monthlyBudget={monthlyBudget} setBudget={setBudget} key={tx.id} tx={tx} />
        )}
      </div>
    </div>
  )
}
