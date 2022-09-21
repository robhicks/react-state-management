/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'
import { findCategory, useBudget } from './BudgetProvider'

export default function Category ({ active, categoryId }) {
  const { budget, changeCategoryName } = useBudget()
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState({ items: [] })

  useEffect(() => {
    const cat = findCategory(budget.monthlyBudgets, categoryId)
    if (active === 'actual') setAmount(cat.actual)
    if (active === 'planned') setAmount(cat.planned)
    if (active === 'remaining') setAmount(cat.remaining)
    setCategory(cat)
  }, [active, budget, categoryId])

  const updateName = val => {
    changeCategoryName(categoryId, val)
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item active={active} key={item.id} itemId={item.id} />
        ) }
      </div>
    </Accordion>
  )
}
