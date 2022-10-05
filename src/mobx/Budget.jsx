import React, { useEffect, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'
import InPlaceEditor from '../common/InPlaceEditor'
import { amountCalculator } from '../utils/budget-utils'
import { currency } from '../utils'

const Budget = observer(() => {
  const [budget] = useState(store)

  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const month = budget?.currentDate.getMonth()
    const year = budget?.currentDate.getFullYear()
    let monthlyBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    if (monthlyBudget) {
      monthlyBudget = amountCalculator(monthlyBudget)
      const planned = monthlyBudget.planned
      const actual = monthlyBudget.actual
      const remains = planned - actual
      setRemaining(remains)
    } else {
      setRemaining(0)
    }
  }, [budget])

  const nameChangeHandler = (val) => budget.changeBudgetName(val)

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={budget.setCurrentDate} />
      </div>
      <ActivityFilter active={budget.active} setActive={budget.setActive} />
      <MonthlyBudgets />
    </div>
  )
})

export default Budget
