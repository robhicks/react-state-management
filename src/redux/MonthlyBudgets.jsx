/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useDispatch, useSelector } from 'react-redux'
import { addMonthlyBudget, selectBudget, setCurrentMonthlyBudget } from './budget-store'
import { deserialize, dateReviver } from '../utils'

const MonthlyBudgets = () => {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()

  const createMonthlyBudget = () => dispatch(addMonthlyBudget())

  useEffect(() => {
    const currentDate = deserialize(budget.currentDate, dateReviver)
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const bud = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    dispatch(setCurrentMonthlyBudget(bud))
  }, [budget.currentDate])

  if (budget.currentMonthlyBudget?.id) {
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
