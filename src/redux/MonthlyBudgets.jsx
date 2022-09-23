/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { useDispatch, useSelector } from 'react-redux'
import { selectBudget, setCurrentMonthlyBudget } from './budget-store'
import { deserialize, dateReviver } from '../utils'

const MonthlyBudgets = () => {
  const budget = useSelector(selectBudget)
  const dispatch = useDispatch()

  useEffect(() => {
    const currentDate = deserialize(budget.currentDate, dateReviver)
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const bud = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    dispatch(setCurrentMonthlyBudget(bud))
  }, [budget.currentDate])

  if (budget.currentMonthlyBudget?.id) {
    return <MonthlyBudget />
  }

  return (null)
}

export default MonthlyBudgets
