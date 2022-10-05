/* eslint-disable react/prop-types */
import React from 'react'
import MonthlyBudget from './MonthlyBudget'
import { copy } from '../utils'
import { genMonthlyBudget } from '../utils/budget-model-generator'

export default function MonthlyBudgets ({ budget, setBudget }) {
  const createMonthlyBudget = () => {
    const bud = copy(budget)
    const month = budget.currentDate.getMonth()
    const year = budget.currentDate.getFullYear()
    const mb = genMonthlyBudget(month, year)
    bud.monthlyBudgets.push(mb)
    setBudget(bud)
  }

  if (budget.currentBudget) {
    return <div className="h-full"><MonthlyBudget budget={budget} setBudget={setBudget} /></div>
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
