import React, { useEffect, useRef, useReducer } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import reducer, { model } from './reducer'

const initialState = { ...model, active: 'planned', currentDate: new Date() }

export default function Budget () {
  const [budget, dispatch] = useReducer(reducer, initialState)
  const loaded = useRef(false)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    dispatch({ type: 'SET_CURRENT_BUDGET', currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => dispatch({ type: 'SET_ACTIVITY', active: val })
  const currentDateHandler = (val) => dispatch({ type: 'SET_CURRENT_DATE', date: val })
  const nameChangeHandler = (ev) => dispatch({ type: 'CHANGE_BUDGET_NAME', name: ev.target.value })

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0 text-xl outline-none" type="text" value={budget.name} onInput={nameChangeHandler} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets budget={budget} dispatch={dispatch} />
    </div>
  )
}
