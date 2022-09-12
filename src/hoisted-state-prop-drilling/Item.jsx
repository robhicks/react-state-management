/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InPlaceEditor from './InPlaceEditor'

export default function Item ({ active, budget, category, item, setBudget }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (active === 'actual') setAmount(item.actual)
    if (active === 'planned') setAmount(item.planned)
    if (active === 'remaining') setAmount(item.remaining)
  }, [])

  const changeName = (value) => {
    item.name = value
  }

  return (
    <>
      <div className="flex justify-between">
        <InPlaceEditor setValue={changeName} value={item.name}>{item.name}</InPlaceEditor>
        <div>{amount}</div>
      </div>
    </>
  )
}
