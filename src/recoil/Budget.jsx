import React from 'react'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'
// import MonthlyBudgets from './MonthlyBudgets'

const Budget = () => {
  const [budget, setBudget] = useRecoilState(budgetState)

  const activityHandler = (val) => setBudget({ ...budget, active: val })
  const currentDateHandler = (val) => setBudget({ ...budget, currentDate: val })
  const nameChangeHandler = (ev) => setBudget({ ...budget, name: ev.target.value })

  return (
    <>
      <div className="flex justify-between items-center">
        <input className="border-0 pl-0" type="text" value={budget.name} onInput={nameChangeHandler} />
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      {/* <MonthlyBudgets /> */}
    </>
  )
}

export default Budget
