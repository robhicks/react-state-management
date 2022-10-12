import React, { useEffect, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useBudget } from './BudgetProvider'
import InPlaceEditor from '../common/InPlaceEditor'
import { amountCalculator } from '../utils/budget-utils'
import { currency } from '../utils'

export default function Budget () {
  const { budget, changeActivity, changeBudgetName, changeCurrentDate } = useBudget()
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

  const activityHandler = (val) => changeActivity(val)
  const currentDateHandler = (val) => changeCurrentDate(val)
  const nameChangeHandler = (val) => changeBudgetName(val)

  return (
    <>
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets />
    </>
  )
}
