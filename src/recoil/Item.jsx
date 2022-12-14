/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'
import { copy, currency, getItemData, reducer, uuid } from '../utils'

const Item = ({ item }) => {
  const [budget, setBudget] = useRecoilState(budgetState)
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(item.planned)

  useEffect(() => {
    if (budget.active === 'actual') setAmount(item.actual)
    if (budget.active === 'planned') setAmount(item.planned)
    if (budget.active === 'remaining') setAmount(item.remaining)
  }, [budget.active, item.planned, item.actual])

  const changeName = (value) => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item: itm } = getItemData(bud, item.id)
      itm.name = value
      return { ...cur, ...bud }
    })
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    setBudget((cur) => {
      const bud = copy(cur)
      const { category, item: itm } = getItemData(bud, item.id)
      itm.planned = +value
      category.planned = category.items.reduce((p, c) => reducer(p, c, 'planned'))
      return { ...cur, ...bud }
    })
  }

  const addEmptyTx = () => {
    setBudget((cur) => {
      const bud = copy(cur)
      const { item: itm } = getItemData(bud, item.id)
      const d = new Date()
      itm.transactions.push({ amount: 0, date: d.toISOString().substring(0, 10), id: uuid() })
      return { ...cur, ...bud }
    })
  }

  return (
    <div className="bg-slate-50 mb-2 p-1">
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{currency(amount)}</div>
      </div>
      <div className="pl-6">Planned: <input type="number" value={planned} onInput={changePlanned} /></div>
      <div className="pl-6 flex gap-1 items-center">Transactions <button className="h-5 w-5" onClick={addEmptyTx}><svg height="20" width="20"><path d={mdiPlus}></path></svg></button></div>
      <div className="pl-8">
        {item.transactions.map((tx) =>
          <Transaction key={tx.id} transaction={tx} />
        )}
      </div>
    </div>
  )
}

export default Item
