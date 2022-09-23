/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { useSelector, useDispatch } from 'react-redux'
import { addEmptyTransaction, changeItemName, changeItemPlannedAmount, selectBudget } from './budget-store'

const Item = ({ item }) => {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(item.planned)

  useEffect(() => {
    if (budget.active === 'actual') setAmount(item.actual)
    if (budget.active === 'planned') setAmount(item.planned)
    if (budget.active === 'remaining') setAmount(item.remaining)
  }, [budget.active, item.planned, item.actual])

  const changeName = (value) => {
    dispatch(changeItemName({ itemId: item.id, name: value }))
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    dispatch(changeItemPlannedAmount({ itemId: item.id, amount: value }))
  }

  const addEmptyTx = () => {
    dispatch(addEmptyTransaction({ itemId: item.id }))
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
          <Transaction key={tx.id} transaction={tx} />
        )}
      </div>
    </div>
  )
}

export default Item
