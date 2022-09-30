import React, { useEffect, useState } from 'react'
import getModel from '../utils/budget-model-generator'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import InPlaceEditor from '../common/InPlaceEditor'

const model = getModel()

export default function Budget () {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setBudget({ ...budget, currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => setBudget({ ...budget, active: val })
  const currentDateHandler = (val) => setBudget({ ...budget, currentDate: val })
  const nameChangeHandler = (val) => setBudget({ ...budget, name: val })

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <InPlaceEditor setValue={nameChangeHandler} value={budget.name} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets budget={budget} setBudget={setBudget} />
    </div>)
}
