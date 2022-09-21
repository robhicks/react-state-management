/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'
import { findCategory } from './useBudget'
import { copy } from '../utils'

export default function Category ({ active, budget, category, saveBudget, setBudget }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    const cat = findCategory(budget.monthlyBudgets, category.id)
    if (active === 'actual') setAmount(cat.actual)
    if (active === 'planned') setAmount(cat.planned)
    if (active === 'remaining') setAmount(cat.remaining)
  }, [active, budget, category])

  const updateName = val => {
    setBudget((cur) => {
      const bud = copy(cur)
      const cat = findCategory(bud.monthlyBudgets, category.id)
      cat.name = val
      saveBudget(bud)
      return bud
    })
  }

  console.log('category', category)

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item active={active} budget={budget} key={item.id} item={item} saveBudget={saveBudget} setBudget={setBudget} />
        ) }
      </div>
    </Accordion>
  )
}
