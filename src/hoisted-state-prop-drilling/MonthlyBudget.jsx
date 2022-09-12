/* eslint-disable react/prop-types */
import React from 'react'
import Categories from './Categories'

export default function MonthlyBudget ({ active, budget, monthlyBudget, setBudget }) {
  return (
    <>
      <Categories active={active} budget={budget} monthlyBudget={monthlyBudget} setBudget={setBudget} />
    </>
  )
}
