import { useEffect, useState } from 'react'
import getModel from '../utils/budget-model-generator'

const model = getModel()

export default () => {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setBudget({ ...budget, currentBudget })
  }, [budget.currentDate, budget.monthlyBudgets])

  return {
    budget,
    setBudget
  }
}
