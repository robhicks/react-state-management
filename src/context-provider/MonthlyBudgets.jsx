/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useBudget } from './BudgetProvider'

export default function MonthlyBudgets ({ active, currentDate }) {
  const { budget } = useBudget()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const [currentMonthlyBudget, setCurrentMonthlyBudget] = useState()

  useEffect(() => {
    setCurrentMonthlyBudget((budget.monthlyBudgets || []).find((bud) => bud.month === currentMonth && bud.year === currentYear))
  }, [budget, currentDate])

  if (currentMonthlyBudget) {
    return <MonthlyBudget active={active} monthlyBudgetId={currentMonthlyBudget.id} />
  }

  return (null)
}
