import React, { useState } from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'
import InPlaceEditor from '../common/InPlaceEditor'

const Budget = observer(() => {
  const [budget] = useState(store)

  const nameChangeHandler = (val) => budget.changeBudgetName(val)

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {budget.planned - budget.actual || 0}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={budget.setCurrentDate} />
      </div>
      <ActivityFilter active={budget.active} setActive={budget.setActive} />
      <MonthlyBudgets />
    </div>
  )
})

export default Budget
