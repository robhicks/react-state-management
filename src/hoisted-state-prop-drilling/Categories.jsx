/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Accordion from '../common/Accordion'
import { reducer } from '../utils/'
import { amountCalculator } from '../utils/budget-utils'

export default function Categories ({ budget, setBudget }) {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)
  const [currentMonthlyBudget, setCurrentMonthlyBudget] = useState()

  useEffect(() => {
    const d = budget.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setCurrentMonthlyBudget(monthlyBudget)
    const mb = amountCalculator(monthlyBudget)
    if (mb) {
      setIncomeAmount(mb.categories.income.reduce((p, c) => reducer(p, c, budget.active), 0))
      setExpenseAmount(mb.categories.expense.reduce((p, c) => reducer(p, c, budget.active), 0))
    }
  }, [budget.active, budget.currentDate, budget.monthlyBudgets])

  if (currentMonthlyBudget) {
    return (
      <div className="">
        <Accordion amount={incomeAmount} border title="Income">
          <div className="h-1 mt-1 border-t border-gray-300"></div>
            {currentMonthlyBudget.categories.income.map((cat) =>
            <Category key={cat.id} budget={budget} category={cat} setBudget={setBudget} />
            )}
        </Accordion>
        <Accordion amount={expenseAmount} border title="Expense">
          <div className="h-1 mt-1 border-t border-gray-300"></div>
          {currentMonthlyBudget.categories.expense.map((cat) =>
            <Category key={cat.id} budget={budget} category={cat} setBudget={setBudget} />
          )}
        </Accordion>
      </div>
    )
  }

  return null
}
