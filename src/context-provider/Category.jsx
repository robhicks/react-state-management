/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'
import { useBudget } from './BudgetProvider'

export default function Category ({ category }) {
  const { budget, changeCategoryName } = useBudget()
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    if (budget.active === 'actual') setAmount(category.actual)
    if (budget.active === 'planned') setAmount(category.planned)
    if (budget.active === 'remaining') setAmount(category.remaining)
  }, [budget.active, category.actual, category.planned, category.remaining])

  const updateName = val => {
    changeCategoryName(category.id, val)
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item key={item.id} item={item} />
        ) }
      </div>
    </Accordion>
  )
}
