/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import Item from './Item'
import InPlaceEditor from './InPlaceEditor'
import { set } from 'idb-keyval'

export default function Category ({ active, budget, category, setBudget }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (active === 'actual') setAmount(category.actual)
    if (active === 'planned') setAmount(category.planned)
    if (active === 'remaining') setAmount(category.remaining)
  }, [])

  const updateName = val => {
    category.name = val
    set('budget', budget)
    setBudget(budget)
  }

  console.log('category', category)

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      {category.items.map((item) => <Item active={active} budget={budget} category={category} setBudget={setBudget} key={item.id} item={item} />)}
    </Accordion>
  )
}
