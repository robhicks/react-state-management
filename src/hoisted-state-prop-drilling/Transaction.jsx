/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiDelete } from '@mdi/js'
import { copy, reducer } from '../utils'
import { set } from 'idb-keyval'

export default function Transaction ({ budget, category, item, monthlyBudget, setBudget, tx }) {
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
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    itm.transactions = itm.transactions.filter((t) => t.id !== tx.id)
    setBudget(bud)
    set('budget', bud)
  }

  const dateChangeHandler = (ev) => {
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    const t = itm.transactions.find((tr) => tr.id === tx.id)
    t.date = ev.target.value
    setBudget(bud)
    set('budget', bud)
  }
  const sourceChangeHandler = (ev) => {
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    const t = itm.transactions.find((tr) => tr.id === tx.id)
    t.source = ev.target.value
    setBudget(bud)
    set('budget', bud)
  }
  const amountChangeHandler = (ev) => {
    const bud = copy(budget)
    const mb = bud.monthlyBudgets.find((m) => m.id === monthlyBudget.id)
    const cat = mb.categories[category.type].find((c) => c.id === category.id)
    const itm = cat.items.find((i) => i.id === item.id)
    const t = itm.transactions.find((tr) => tr.id === tx.id)
    t.amount = ev.target.value
    // set the actual amount of the item
    itm.actual = itm.transactions.reduce((p, c) => reducer(p, c, 'amount'), 0)
    // set the actual amount of the category
    cat.actual = cat.items.reduce((p, c) => reducer(p, c, 'actual'), 0)
    itm.remaining = itm.planned - itm.actual
    cat.remaining = cat.planned - cat.actual

    setBudget(bud)
    set('budget', bud)
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
