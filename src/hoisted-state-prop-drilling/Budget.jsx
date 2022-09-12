import React, { useEffect, useState } from 'react'
import model from '../budget.model'
import BudgetDatePicker from './BudgetDatePicker'
import ActivityFilter from './ActivityFilter'
import { get, set } from 'idb-keyval'
import MonthlyBudgets from './MonthlyBudgets'

export default function Budget () {
  const [budget, setBudget] = useState({ name: '' })
  const [active, setActive] = useState('planned')
  const [currentDate, setCurrentDate] = useState(new Date())

  const key = 'budget'

  useEffect(() => {
    get(key).then((bud) => {
      if (bud) {
        setBudget(bud)
      } else {
        setBudget(model)
      }
    })
  }, [])

  const changeName = (ev) => {
    const bud = { ...budget, name: ev.target.value }
    setBudget((cur) => bud)
    set(key, bud)
  }

  return (<>
    <div className="flex justify-between items-center">
      <input className="border-0 pl-0" type="text" value={budget.name} onInput={changeName} />
      <BudgetDatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </div>
    <ActivityFilter active={active} setActive={setActive} />
    <MonthlyBudgets active={active} budget={budget} currentDate={currentDate} setBudget={setBudget} />
  </>)
}
