/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useBudget } from './BudgetProvider'
import { copy } from '../utils'
import { genMonthlyBudget } from '../utils/budget-model-generator'

export default function MonthlyBudgets () {
  const { budget, addMonthlyBudget } = useBudget()
  const [monthlyBudget, setMonthlyBudget] = useState(false)

  useEffect(() => {
    const d = budget.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setMonthlyBudget(Boolean(monthlyBudget))
  }, [budget.currentDate, budget.monthlyBudgets])

  const createMonthlyBudget = () => {
    const bud = copy(budget)
    const month = budget.currentDate.getMonth()
    const year = budget.currentDate.getFullYear()
    const mb = genMonthlyBudget(month, year)
    mb.month = month
    mb.year = year
    bud.monthlyBudgets.push(mb)
    addMonthlyBudget(bud)
  }

  if (monthlyBudget) {
    return <MonthlyBudget />
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
