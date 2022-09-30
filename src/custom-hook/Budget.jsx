import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import useBudget from './useBudget'
import InPlaceEditor from '../common/InPlaceEditor'

export default function Budget () {
  const { budget, setBudget } = useBudget()

  const activityHandler = (val) => setBudget({ ...budget, active: val })
  const currentDateHandler = (val) => setBudget({ ...budget, currentDate: val })
  const nameChangeHandler = (val) => setBudget({ ...budget, name: val })

  return (
    <div className="h-full">
    <div className="flex justify-between items-center">
      <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {budget.planned - budget.actual || 0}</div>
      <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
    </div>
    <ActivityFilter active={budget.active} setActive={activityHandler} />
    <MonthlyBudgets budget={budget} setBudget={setBudget} />
  </div>
  )
}
