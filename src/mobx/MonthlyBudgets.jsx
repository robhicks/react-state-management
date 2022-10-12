/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'

const MonthlyBudgets = observer(() => {
  const [budget] = useState(store)

  if (budget.currentMonthlyBudget) {
    return <div className="h-full"><MonthlyBudget /></div>
  }

  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title">Create Monthly Budget</h2>
        <p>A monthly budget does not exist for this month. </p>
        <div className="card-actions justify-end">
          <button onClick={budget.addMonthlyBudget} className="btn btn-primary">Create Monthly Budget</button>
        </div>
      </div>
    </div>
  )
})

export default MonthlyBudgets
