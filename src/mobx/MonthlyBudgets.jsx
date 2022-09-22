/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { observer } from 'mobx-react-lite'
import store from './BudgetModel'

const MonthlyBudgets = observer(() => {
  const [budget] = useState(store)

  if (budget.currentMonthlyBudget?.id) {
    return <MonthlyBudget />
  }

  return (null)
})

export default MonthlyBudgets
