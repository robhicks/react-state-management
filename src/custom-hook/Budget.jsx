import React, { useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import useBudget from './useBudget'

export default function Budget () {
  const { budget, saveBudget, setBudget } = useBudget()
  const [active, setActive] = useState('planned')
  const [currentDate, setCurrentDate] = useState(new Date())

  const changeName = (ev) => {
    setBudget((cur) => {
      const bud = { ...cur, name: ev.target.value }
      saveBudget(bud)
      return bud
    })
  }

  return (<>
    <div className="flex justify-between items-center">
      <input className="border-0 pl-0" type="text" value={budget.name} onInput={changeName} />
      <BudgetDatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
    <ActivityFilter active={active} setActive={setActive} />
    <MonthlyBudgets active={active} budget={budget} saveBudget={saveBudget} setBudget={setBudget} currentDate={currentDate} />
  </>)
}
