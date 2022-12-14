import React, { useEffect, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import useBudget from './useBudget'
import InPlaceEditor from '../common/InPlaceEditor'
import { currency } from '../utils'
import { amountCalculator } from '../utils/budget-utils'

export default function Budget () {
  const { budget, setBudget } = useBudget()
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    let currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)

    if (currentBudget) {
      currentBudget = amountCalculator(currentBudget)
      const planned = currentBudget.planned
      const actual = currentBudget.actual
      setRemaining(planned - actual)
    } else {
      setRemaining(0)
    }
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => setBudget((cur) => ({ ...cur, active: val }))
  const currentDateHandler = (val) => setBudget((cur) => ({ ...cur, currentDate: val }))
  const nameChangeHandler = (val) => setBudget((cur) => ({ ...cur, name: val }))

  return (
    <div className="h-full">
    <div className="flex justify-between items-center">
      <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
      <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
    </div>
    <ActivityFilter active={budget.active} setActive={activityHandler} />
    <MonthlyBudgets budget={budget} setBudget={setBudget} />
  </div>
  )
}
