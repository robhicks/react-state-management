/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Accordion from '../common/Accordion'
import { reducer } from '../utils/'
import { useBudget } from './BudgetProvider'

export default function Categories ({ active, monthlyBudgetId }) {
  const { budget } = useBudget()
  const [monthlyBudget, setMonthlyBudget] = useState({ categories: { income: [], expense: [] } })
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)

  useEffect(() => {
    const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.id === monthlyBudgetId)
    setMonthlyBudget(monthlyBudget)
    setIncomeAmount(monthlyBudget.categories.income.reduce((p, c) => reducer(p, c, active), 0))

    setExpenseAmount(monthlyBudget.categories.expense.reduce((p, c) => reducer(p, c, active), 0))
  }, [active, monthlyBudgetId])

  return (
    <div className="">
      <Accordion amount={incomeAmount} border title="Income">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
          {monthlyBudget.categories.income.map((cat) =>
            <Category key={cat.id} active={active} categoryId={cat.id} />
          )}
      </Accordion>
      <Accordion amount={expenseAmount} border title="Expense">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
        {monthlyBudget.categories.expense.map((cat) =>
          <Category key={cat.id} active={active} categoryId={cat.id} />
        )}
      </Accordion>
    </div>
  )
}
