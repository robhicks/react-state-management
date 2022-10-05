import categoryGenerator from './category-generator'

import { uuid } from './index'

const mbTargets = [
  { month: 0, year: 2022 },
  { month: 1, year: 2022 },
  { month: 2, year: 2022 },
  { month: 3, year: 2022 },
  { month: 4, year: 2022 },
  { month: 5, year: 2022 },
  { month: 6, year: 2022 },
  { month: 7, year: 2022 },
  { month: 8, year: 2022 }
]

const budget = {
  active: 'planned',
  actual: 0,
  id: uuid(),
  name: 'Family Budget',
  planned: 0,
  monthlyBudgets: [],
  remaining: 0
}

export default () => {
  mbTargets.forEach((mb) => {
    budget.monthlyBudgets.push({
      id: uuid(),
      month: mb.month,
      year: mb.year,
      planned: 0,
      actual: 0,
      remaining: 0,
      categories: {
        income: categoryGenerator('income', mb.month, mb.year),
        expense: categoryGenerator('expense', mb.month, mb.year)
      }
    })
  })

  return budget
}

export const genMonthlyBudget = (month, year) => {
  return {
    id: uuid(),
    month,
    year,
    planned: 0,
    actual: 0,
    remaining: 0,
    categories: {
      income: categoryGenerator('income', month, year),
      expense: categoryGenerator('expense', month, year)
    }
  }
}
