/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Accordion from './Accordion'

export default function Categories ({ active, budget, monthlyBudget, setBudget }) {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)

  useEffect(() => {
    setIncomeAmount(monthlyBudget.categories.income.reduce((p, c) => {
      if (active === 'actual') return p.actual || 0 + c.actual
      if (active === 'planned') return p.planned || 0 + c.planned
      return p.remaining || 0 + c.remaining
    }, 0))

    setExpenseAmount(monthlyBudget.categories.expense.reduce((p, c) => {
      if (active === 'actual') return p.actual || 0 + c.actual
      if (active === 'planned') return p.planned || 0 + c.planned
      return p.remaining || 0 + c.remaining
    }, 0))
  }, [active, monthlyBudget])

  return (
    <>
      <Accordion amount={incomeAmount} border title="Income">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
          {monthlyBudget.categories.income.map((cat) =>
          <Category key={cat.id} active={active} budget={budget} category={cat} monthlyBudget={monthlyBudget} setBudget={setBudget} />
          )}
      </Accordion>
      <Accordion amount={expenseAmount} border title="Expense">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
        {monthlyBudget.categories.expense.map((cat) =>
          <Category key={cat.id} active={active} budget={budget} category={cat} monthlyBudget={monthlyBudget} setBudget={setBudget} />
        )}
      </Accordion>
    </>
  )
}
