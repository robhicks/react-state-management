import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useBudget } from './BudgetProvider'
import InPlaceEditor from '../common/InPlaceEditor'

export default function Budget () {
  const { budget, changeActivity, changeBudgetName, changeCurrentDate } = useBudget()

  const activityHandler = (val) => changeActivity(val)
  const currentDateHandler = (val) => changeCurrentDate(val)
  const nameChangeHandler = (val) => changeBudgetName(val)

  return (
    <>
      <div className="flex justify-between items-center">
        <InPlaceEditor setValue={nameChangeHandler} value={budget.name} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets />
    </>
  )
}
