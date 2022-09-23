/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'

export default function Category ({ budget, category, dispatch }) {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (budget.active === 'actual') setAmount(category.actual)
    if (budget.active === 'planned') setAmount(category.planned)
    if (budget.active === 'remaining') setAmount(category.remaining)
  }, [budget.active, category.actual, category.planned, category.remaining])

  const updateName = val => {
    dispatch({ type: 'UPDATE_CATEGORY_NAME', categoryId: category.id, name: val })
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item budget={budget} dispatch={dispatch} key={item.id} item={item} />
        ) }
      </div>
    </Accordion>
  )
}
