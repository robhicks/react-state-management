/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'

export default function MonthlyBudgets ({ active, budget, currentDate, setBudget }) {
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const [currentMonthlyBudget, setCurrentMonthlyBudget] = useState()

  useEffect(() => {
    setCurrentMonthlyBudget((budget.monthlyBudgets || []).find((bud) => bud.month === currentMonth && bud.year === currentYear))
  }, [budget, currentDate])

  if (currentMonthlyBudget) {
    return <MonthlyBudget active={active} monthlyBudget={currentMonthlyBudget} budget={budget} setBudget={setBudget} />
  }

  return (null)
}
