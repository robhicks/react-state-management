import React from 'react'
import Budget from './Budget'
import { BudgetProvider } from './BudgetProvider'

export default function ContextProvider () {
  return (
    <div className="w-8/12 mx-auto py-4">
      <BudgetProvider>
        <Budget />
      </BudgetProvider>
    </div>
  )
}
