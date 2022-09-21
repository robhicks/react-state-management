/* eslint-disable react/prop-types */
import React from 'react'
import Categories from './Categories'

export default function MonthlyBudget ({ active, budget, monthlyBudget, saveBudget, setBudget }) {
  return (
    <div className="h-[calc(100%-12rem)] overflow-y-auto">
      <Categories active={active} budget={budget} monthlyBudget={monthlyBudget} saveBudget={saveBudget} setBudget={setBudget} />
    </div>
  )
}
