import React, { useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'

const Budget = observer(() => {
  const [budget] = useState(store)

  const nameChangeHandler = (ev) => budget.changeBudgetName(ev.target.value)

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0 text-xl outline-none" type="text" value={budget.name} onInput={nameChangeHandler} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={budget.setCurrentDate} />
      </div>
      <ActivityFilter active={budget.active} setActive={budget.setActive} />
      <MonthlyBudgets />
    </div>
  )
})

export default Budget
