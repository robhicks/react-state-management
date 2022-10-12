import React, { useEffect, useReducer, useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import reducer from './reducer'
import InPlaceEditor from '../common/InPlaceEditor'
import getModel from '../utils/budget-model-generator'
import { currency } from '../utils'
import { amountCalculator } from '../utils/budget-utils'

const model = getModel()

const initialState = { ...model, active: 'planned', currentDate: new Date() }

export default function Budget () {
  const [budget, dispatch] = useReducer(reducer, initialState)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
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
  }, [budget.currentDate, budget.monthlyBudgets, budget.monthlyBudgets.categories])

  const activityHandler = (val) => dispatch({ type: 'SET_ACTIVITY', active: val })
  const currentDateHandler = (val) => dispatch({ type: 'SET_CURRENT_DATE', date: val })
  const nameChangeHandler = (val) => dispatch({ type: 'CHANGE_BUDGET_NAME', name: val })

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets budget={budget} dispatch={dispatch} />
    </div>
  )
}
