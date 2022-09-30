import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useSelector, useDispatch } from 'react-redux'
import { selectBudget, changeBudgetName, setActive, setCurrentDate } from './budget-store'
import { dateReviver, deserialize, serialize } from '../utils'
import InPlaceEditor from '../common/InPlaceEditor'

export default function Budget () {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()

  const nameChangeHandler = (val) => dispatch(changeBudgetName(val))
  const changeActivity = (val) => dispatch(setActive(val))
  const dateChangeHandler = (val) => dispatch(setCurrentDate(serialize(val)))

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <InPlaceEditor setValue={nameChangeHandler} value={budget.name} />
        <BudgetDatePicker currentDate={deserialize(budget.currentDate, dateReviver)} setCurrentDate={dateChangeHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={changeActivity} />
      <MonthlyBudgets />
    </div>
  )
}
