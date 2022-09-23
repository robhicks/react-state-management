/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Accordion from '../common/Accordion'
import { useSelector } from 'react-redux'
import { selectBudget } from './budget-store'
import { reducer } from '../utils/'

const Categories = () => {
  const budget = useSelector(selectBudget)
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)

  useEffect(() => {
    setIncomeAmount(budget.currentMonthlyBudget.categories.income.reduce((p, c) => reducer(p, c, budget.active), 0))
    setExpenseAmount(budget.currentMonthlyBudget.categories.expense.reduce((p, c) => reducer(p, c, budget.active), 0))
  }, [budget.active, budget.currentMonthlyBudget])

  return (
    <div className="">
      <Accordion amount={incomeAmount} border title="Income">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
        {budget.currentMonthlyBudget.categories.income.map((cat) =>
          <Category key={cat.id} category={cat} />
        )}
      </Accordion>
      <Accordion amount={expenseAmount} border title="Expense">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
        {budget.currentMonthlyBudget.categories.expense.map((cat) =>
          <Category key={cat.id} category={cat} />
        )}
      </Accordion>
    </div>
  )
}

export default Categories
