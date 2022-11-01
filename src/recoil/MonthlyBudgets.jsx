/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'
import { copy } from '../utils'
import { genMonthlyBudget } from '../utils/budget-model-generator'

const MonthlyBudgets = () => {
  const [budget, setBudget] = useRecoilState(budgetState)
  const [monthlyBudget, setMonthlyBudget] = useState(false)

  useEffect(() => {
    const d = budget.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setMonthlyBudget(Boolean(monthlyBudget))
  }, [budget.currentDate, budget.monthlyBudgets])

  const createMonthlyBudget = () => {
    setBudget((cur) => {
      const bud = copy(cur)
      const month = cur.currentDate.getMonth()
      const year = cur.currentDate.getFullYear()
      const mb = genMonthlyBudget(month, year)
      bud.monthlyBudgets.push(mb)
      return { ...cur, ...bud }
    })
  }

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
