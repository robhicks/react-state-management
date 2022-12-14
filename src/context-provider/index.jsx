import React from 'react'
import Budget from './Budget'
import { BudgetProvider } from './BudgetProvider'

export default function ContextProvider () {
  return (
    <div className="w-8/12 mx-auto py-4">
      <h1 className="prose prose-2xl mb-1">04-context-provider</h1>
      <BudgetProvider>
        <Budget />
      </BudgetProvider>
    </div>
  )
}
