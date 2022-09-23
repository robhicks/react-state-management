/* eslint-disable react/prop-types */
import React from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'

const MonthlyBudgets = () => {
  const [budget] = useRecoilState(budgetState)

  if (budget.currentBudget?.id) {
    return <MonthlyBudget />
  }

  return (null)
}

export default MonthlyBudgets
