/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { getItemData, useBudget } from './BudgetProvider'

export default function Item ({ active, itemId }) {
  const { addEmptyTransaction, budget, changeItemName, changeItemPlannedAmount } = useBudget()
  const [item, setItem] = useState({ transactions: [] })
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    const { item: itm } = getItemData(budget, itemId)
    if (active === 'actual') setAmount(itm.actual)
    if (active === 'planned') setAmount(itm.planned)
    if (active === 'remaining') setAmount(itm.remaining)
    setItem(itm)
  }, [active, budget, itemId])

  const changeName = (value) => {
    changeItemName(itemId, value)
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    changeItemPlannedAmount(itemId, value)
  }

  const addEmptyTx = () => {
    addEmptyTransaction(itemId)
  }

  return (
    <div className="bg-slate-50 mb-2 p-1">
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{amount}</div>
      </div>
      <div className="pl-6">Planned: <input type="number" value={item.planned || ''} onInput={changePlanned} /></div>
      <div className="pl-6 flex gap-1 items-center">Transactions <button className="h-5 w-5" onClick={addEmptyTx}><svg height="20" width="20"><path d={mdiPlus}></path></svg></button></div>
      <div className="pl-8">
        {item.transactions.map((tx) =>
          <Transaction key={tx.id} txId={tx.id} />
        )}
      </div>
    </div>
  )
}
