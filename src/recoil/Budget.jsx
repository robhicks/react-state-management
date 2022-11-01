import React, { useEffect, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'
import MonthlyBudgets from './MonthlyBudgets'
import InPlaceEditor from '../common/InPlaceEditor'
import { amountCalculator } from '../utils/budget-utils'
import { currency } from '../utils'

const Budget = () => {
  const [budget, setBudget] = useRecoilState(budgetState)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)

    if (currentBudget) {
      const mb = amountCalculator(currentBudget)
      const planned = mb.planned
      const actual = mb.actual
      const remaining = planned - actual
      setRemaining(remaining)
    } else {
      setRemaining(0)
    }
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => setBudget((cur) => ({ ...cur, active: val }))
  const currentDateHandler = (val) => setBudget((cur) => ({ ...cur, currentDate: val }))
  const nameChangeHandler = (val) => setBudget((cur) => ({ ...cur, name: val }))

  // console.log('budget', budget)

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets />
    </div>
  )
}

export default Budget
