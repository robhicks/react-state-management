import { useEffect, useState } from 'react'
import getModel from '../utils/budget-model-generator'
import { amountCalculator } from '../utils/budget-utils'

const model = getModel()

export default () => {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    if (currentBudget) {
      amountCalculator(currentBudget)
      budget.planned = currentBudget.planned
      budget.actual = currentBudget.actual
      budget.remaining = currentBudget.remaining
      setBudget({ ...budget, currentBudget })
    } else {
      setBudget({ ...budget, currentBudget, remaining: 0 })
    }
  }, [budget.currentDate, budget.monthlyBudgets])

  return {
    budget,
    setBudget
  }
}
