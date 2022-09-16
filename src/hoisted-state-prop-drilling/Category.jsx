/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import Item from './Item'
import InPlaceEditor from './InPlaceEditor'
import { set } from 'idb-keyval'

export default function Category ({ active, budget, category, monthlyBudget, setBudget }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (active === 'actual') setAmount(category.actual)
    if (active === 'planned') setAmount(category.planned)
    if (active === 'remaining') setAmount(category.remaining)
  }, [active, category])

  const updateName = val => {
    category.name = val
    set('budget', budget)
    setBudget(budget)
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item active={active} budget={budget} category={category} monthlyBudget={monthlyBudget} setBudget={setBudget} key={item.id} item={item} />
        ) }
      </div>
    </Accordion>
  )
}
