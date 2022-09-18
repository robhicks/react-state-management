/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'

export default function Category ({ active, budget, category, monthlyBudget, dispatch }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (active === 'actual') setAmount(category.actual)
    if (active === 'planned') setAmount(category.planned)
    if (active === 'remaining') setAmount(category.remaining)
  }, [active, category])

  const updateName = val => {
    dispatch({ type: 'UPDATE_CATEGORY_NAME', monthlyBudgetId: monthlyBudget.id, categoryId: category.id, name: val })
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item active={active} budget={budget} category={category} monthlyBudget={monthlyBudget} dispatch={dispatch} key={item.id} item={item} />
        ) }
      </div>
    </Accordion>
  )
}
