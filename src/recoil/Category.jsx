/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Accordion from '../common/Accordion'
import Item from './Item'
import InPlaceEditor from '../common/InPlaceEditor'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'
import { copy, getCategoryData, reducer } from '../utils'

const Category = ({ category }) => {
  const [budget, setBudget] = useRecoilState(budgetState)
  const [amount, setAmount] = useState(0)
  const [planned, setPlanned] = useState(0)
  const [actual, setActual] = useState(0)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const cat = copy(category)
    cat.items.forEach((item) => {
      item.actual = item?.transactions?.reduce((p, c) => reducer(p, c, 'amount'), 0) || 0
      item.remaining = item.planned - item.actual
    })
    const planned = cat?.items?.reduce((p, c) => reducer(p, c, 'planned'), 0) || 0
    const actual = cat?.items?.reduce((p, c) => reducer(p, c, 'actual'), 0) || 0
    setPlanned(planned)
    setActual(actual)
    setRemaining(planned - actual)
  }, [category])

  useEffect(() => {
    if (budget.active === 'actual') setAmount(actual)
    if (budget.active === 'planned') setAmount(planned)
    if (budget.active === 'remaining') setAmount(remaining)
  }, [budget.active, actual, planned, remaining])

  const updateName = (val) => {
    const bud = copy(budget)
    const { category: cat } = getCategoryData(bud, category.id)
    cat.name = val
    setBudget({ ...budget, ...bud })
  }

  return (
    <Accordion amount={amount} title={<InPlaceEditor value={category.name} setValue={updateName} />} selector={category.name}>
      <div className="pt-2">
        {category.items.map((item) =>
          <Item key={item.id} item={item} />
        )}
      </div>
    </Accordion>
  )
}

export default Category
