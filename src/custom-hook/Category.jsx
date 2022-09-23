/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'
import { copy, getCategoryData } from '../utils'

export default function Category ({ budget, category, setBudget }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (budget.active === 'actual') setAmount(category.actual)
    if (budget.active === 'planned') setAmount(category.planned)
    if (budget.active === 'remaining') setAmount(category.remaining)
  }, [budget.active, category.actual, category.planned, category.remaining])

  const updateName = (val) => {
    setBudget((cur) => {
      const bud = copy(budget)
      const { category: cat } = getCategoryData(bud, category.id)
      cat.name = val
      return { ...cur, ...bud }
    })
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item budget={budget} setBudget={setBudget} key={item.id} item={item} />
        ) }
      </div>
    </Accordion>
  )
}
