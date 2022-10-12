import React, { useEffect, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'
import InPlaceEditor from '../common/InPlaceEditor'
import { currency } from '../utils'

const Budget = observer(() => {
  const [budget] = useState(store)

  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const monthlyBudget = budget.currentMonthlyBudget

    if (monthlyBudget) {
      const planned = monthlyBudget.planned
      const actual = monthlyBudget.actual
      const remains = planned - actual
      setRemaining(remains)
    } else {
      setRemaining(0)
    }
  }, [budget.monthlyBudgets, budget.currentMonthlyBudget, budget.currentDate])

  const nameChangeHandler = (val) => (budget.name = val)

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={(date) => (budget.currentDate = date)} />
      </div>
      <ActivityFilter active={budget.active} setActive={(activity) => (budget.active = activity)} />
      <MonthlyBudgets />
    </div>
  )
})

export default Budget
