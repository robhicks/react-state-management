import React, { useEffect, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useSelector, useDispatch } from 'react-redux'
import { selectBudget, changeBudgetName, setActive, setCurrentDate } from './budget-store'
import { dateReviver, deserialize, serialize, currency } from '../utils'
import { amountCalculator } from '../utils/budget-utils'
import InPlaceEditor from '../common/InPlaceEditor'

export default function Budget () {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(deserialize(budget.currentDate)) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    let currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    if (currentBudget) {
      currentBudget = amountCalculator(currentBudget)
      const planned = currentBudget.planned
      const actual = currentBudget.actual
      setRemaining(planned - actual)
    } else {
      setRemaining(0)
    }
  }, [budget.currentDate, budget.monthlyBudgets])

  const nameChangeHandler = (val) => dispatch(changeBudgetName(val))
  const changeActivity = (val) => dispatch(setActive(val))
  const dateChangeHandler = (val) => dispatch(setCurrentDate(serialize(val)))

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={deserialize(budget.currentDate, dateReviver)} setCurrentDate={dateChangeHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={changeActivity} />
      <MonthlyBudgets />
    </div>
  )
}
