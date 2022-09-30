import React, { useEffect, useReducer } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import reducer, { model } from './reducer'
import InPlaceEditor from '../common/InPlaceEditor'

const initialState = { ...model, active: 'planned', currentDate: new Date() }

export default function Budget () {
  const [budget, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    dispatch({ type: 'SET_CURRENT_BUDGET', currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => dispatch({ type: 'SET_ACTIVITY', active: val })
  const currentDateHandler = (val) => dispatch({ type: 'SET_CURRENT_DATE', date: val })
  const nameChangeHandler = (val) => dispatch({ type: 'CHANGE_BUDGET_NAME', name: val })

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {budget.planned - budget.actual || 0}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets budget={budget} dispatch={dispatch} />
    </div>
  )
}
