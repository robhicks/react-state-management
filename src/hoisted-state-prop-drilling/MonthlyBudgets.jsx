/* eslint-disable react/prop-types */
import React from 'react'
import MonthlyBudget from './MonthlyBudget'

export default function MonthlyBudgets ({ budget, setBudget }) {
  if (budget.currentBudget) {
    return <MonthlyBudget budget={budget} setBudget={setBudget} />
  }

  return (null)
}
