import React, { useEffect } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'
import MonthlyBudgets from './MonthlyBudgets'

const Budget = () => {
  const [budget, setBudget] = useRecoilState(budgetState)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setBudget({ ...budget, currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => setBudget({ ...budget, active: val })
  const currentDateHandler = (val) => setBudget({ ...budget, currentDate: val })
  const nameChangeHandler = (ev) => setBudget({ ...budget, name: ev.target.value })

  // console.log('budget', budget)

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0 text-xl outline-none" type="text" value={budget.name} onInput={nameChangeHandler} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets />
    </div>
  )
}

export default Budget
