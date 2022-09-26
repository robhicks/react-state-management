import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useBudget } from './BudgetProvider'

export default function Budget () {
  const { budget, changeActivity, changeBudgetName, changeCurrentDate } = useBudget()

  const activityHandler = (val) => changeActivity(val)
  const currentDateHandler = (val) => changeCurrentDate(val)
  const nameChangeHandler = (ev) => changeBudgetName(ev.target.value)

  return (
    <>
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0" type="text" value={budget.name} onInput={nameChangeHandler} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets />
    </>
  )
}
