import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { useSelector, useDispatch } from 'react-redux'
import { selectBudget, changeBudgetName, loadFromStorage, setActive, setCurrentDate } from './budget-store'
import { dateReviver, deserialize, serialize } from '../utils'

export default function Budget () {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()

  const changeName = (ev) => dispatch(changeBudgetName(ev.target.value))
  const changeActivity = (val) => dispatch(setActive(val))
  const dateChangeHandler = (val) => dispatch(setCurrentDate(serialize(val)))

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0" type="text" value={budget.name || ''} onInput={changeName} />
        <BudgetDatePicker currentDate={deserialize(budget.currentDate, dateReviver)} setCurrentDate={dateChangeHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={changeActivity} />
      <MonthlyBudgets />
    </div>
  )
}
