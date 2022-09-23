/* eslint-disable react/prop-types */
import React from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useBudget } from './BudgetProvider'

export default function MonthlyBudgets () {
  const { budget } = useBudget()

  if (budget.currentBudget) {
    return <MonthlyBudget />
  }

  return (null)
}
