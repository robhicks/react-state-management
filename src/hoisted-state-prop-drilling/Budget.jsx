import React, { useEffect, useState } from 'react'
import model from '../budget.model'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import { get, set } from '../db'
import MonthlyBudgets from './MonthlyBudgets'

export default function Budget () {
  const [budget, setBudget] = useState(model)

  const key = 'budget'

  // load from IndexedDB
  useEffect(() => {
    get(key).then((bud) => {
      if (bud) {
        setBudget(({ ...model, ...bud, currentDate: new Date() }))
      }
    })
  }, [])

  // save to IndexedDb
  useEffect(() => {
    set(key, ({ id: budget.id, name: budget.name, monthlyBudgets: budget.monthlyBudgets }))
  }, [budget.id, budget.name, budget.monthlyBudgets])

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setBudget({ ...budget, currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => setBudget({ ...budget, active: val })
  const currentDateHandler = (val) => setBudget({ ...budget, currentDate: val })
  const nameChangeHandler = (ev) => setBudget({ ...budget, name: ev.target.value })

  return (<>
    <div className="flex justify-between items-center">
      <input className="border-0 pl-0" type="text" value={budget.name} onInput={nameChangeHandler} />
      <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
    </div>
    <ActivityFilter active={budget.active} setActive={activityHandler} />
    <MonthlyBudgets budget={budget} setBudget={setBudget} />
  </>)
}
