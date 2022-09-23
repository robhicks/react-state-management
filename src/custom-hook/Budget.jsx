import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import useBudget from './useBudget'

export default function Budget () {
  const { budget, setBudget } = useBudget()

  const activityHandler = (val) => setBudget({ ...budget, active: val })
  const currentDateHandler = (val) => setBudget({ ...budget, currentDate: val })
  const nameChangeHandler = (ev) => setBudget({ ...budget, name: ev.target.value })

  return (<>
    <div className="flex justify-between items-center">
      <input className="border-0 pl-0" type="text" value={budget.name} onInput={nameChangeHandler} />
      <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
    </div>
    <ActivityFilter active={budget.active} setActive={activityHandler} />
    <MonthlyBudgets budget={budget} setBudget={setBudget} />
  </>)
}
