import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useBudget } from './BudgetProvider'
import InPlaceEditor from '../common/InPlaceEditor'
import { currency } from '../utils'

export default function Budget () {
  const { budget, changeActivity, changeBudgetName, changeCurrentDate } = useBudget()

  const activityHandler = (val) => changeActivity(val)
  const currentDateHandler = (val) => changeCurrentDate(val)
  const nameChangeHandler = (val) => changeBudgetName(val)

  return (
    <>
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(budget.remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets />
    </>
  )
}
