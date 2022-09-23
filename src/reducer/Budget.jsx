import React, { useEffect, useReducer, useState } from 'react'
import model from '../budget.model'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import { get } from '../db'
import MonthlyBudgets from './MonthlyBudgets'
import reducer from './reducer'

export default function Budget () {
  const [budget, dispatch] = useReducer(reducer, model)
  const [active, setActive] = useState('planned')
  const [currentDate, setCurrentDate] = useState(new Date())

  const key = 'budget'

  useEffect(() => {
    get(key).then((bud) => {
      if (bud) {
        dispatch({ type: 'LOAD_FROM_STORAGE', data: bud })
      }
    })
  }, [])

  const changeName = (ev) => {
    dispatch({ type: 'CHANGE_BUDGET_NAME', name: ev.target.value })
  }

  return (<>
    <div className="flex justify-between items-center">
      <input className="border-0 pl-0" type="text" value={budget.name} onInput={changeName} />
      <BudgetDatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
    <ActivityFilter active={active} setActive={setActive} />
    <MonthlyBudgets active={active} budget={budget} currentDate={currentDate} dispatch={dispatch} />
  </>)
}
