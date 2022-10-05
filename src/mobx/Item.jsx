/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from '../common/InPlaceEditor'
import Transaction from './Transaction'
import { mdiPlus } from '@mdi/js'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'
import { currency, reducer } from '../utils'

const Item = observer(({ item }) => {
  const [budget] = useState(store)
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
  }, [budget.active, planned, actual])

  const changeName = (value) => {
    budget.changeItemName(item.id, value)
  }

  const changePlanned = (ev) => {
    const { value } = ev.target
    setPlanned(value)
    budget.changeItemPlannedAmount(item.id, value)
  }

  const addEmptyTx = () => {
    budget.addEmptyTransaction(item.id)
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
)

export default Item
