import React, { useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useBudget } from './BudgetProvider'

export default function Budget () {
  const { budget, changeBudgetName } = useBudget()
  const [active, setActive] = useState('planned')
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <>
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0" type="text" value={budget.name} onInput={changeBudgetName} />
        <BudgetDatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </div>
      <ActivityFilter active={active} setActive={setActive} />
      <MonthlyBudgets active={active} currentDate={currentDate} />
    </>
  )
}
