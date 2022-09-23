/* eslint-disable react/prop-types */
import React from 'react'
import MonthlyBudget from './MonthlyBudget'

export default function MonthlyBudgets ({ budget, dispatch }) {
  if (budget.currentBudget) {
    return <MonthlyBudget budget={budget} dispatch={dispatch} />
  }

  return (null)
}
