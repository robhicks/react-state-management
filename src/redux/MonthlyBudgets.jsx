/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useDispatch, useSelector } from 'react-redux'
import { addMonthlyBudget, selectBudget } from './budget-store'

const MonthlyBudgets = () => {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()
  const [monthlyBudget, setMonthlyBudget] = useState(false)

  const createMonthlyBudget = () => dispatch(addMonthlyBudget())

  useEffect(() => {
    const d = budget.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setMonthlyBudget(Boolean(monthlyBudget))
  }, [budget.currentDate, budget.monthlyBudgets])

  if (monthlyBudget) {
    return <div className="h-full"><MonthlyBudget /></div>
  }

  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title">Create Monthly Budget</h2>
        <p>A monthly budget does not exist for this month. </p>
        <div className="card-actions justify-end">
          <button onClick={createMonthlyBudget} className="btn btn-primary">Create Monthly Budget</button>
        </div>
      </div>
    </div>
  )
}

export default MonthlyBudgets
