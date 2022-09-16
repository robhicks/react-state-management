/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Accordion from './Accordion'
import { reducer } from '../utils/'

export default function Categories ({ active, budget, monthlyBudget, setBudget }) {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)

  useEffect(() => {
    setIncomeAmount(monthlyBudget.categories.income.reduce((p, c) => reducer(p, c, active), 0))

    setExpenseAmount(monthlyBudget.categories.expense.reduce((p, c) => reducer(p, c, active), 0))
  }, [active, monthlyBudget])

  return (
    <div className="">
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
    </div>
  )
}
