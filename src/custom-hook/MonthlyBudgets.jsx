/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'

export default function MonthlyBudgets ({ active, budget, currentDate, saveBudget, setBudget }) {
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const [currentMonthlyBudget, setCurrentMonthlyBudget] = useState()

  useEffect(() => {
    setCurrentMonthlyBudget((budget.monthlyBudgets || []).find((bud) => bud.month === currentMonth && bud.year === currentYear))
  }, [budget, currentDate])

  if (currentMonthlyBudget) {
    return <MonthlyBudget active={active} budget={budget} saveBudget={saveBudget} setBudget={setBudget} monthlyBudget={currentMonthlyBudget} />
  }

  return (null)
}
