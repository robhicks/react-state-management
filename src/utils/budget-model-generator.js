import categoryGenerator from './category-generator'
import add from 'date-fns/add'

import { uuid } from './index'

const mbTargets = [
  {month: 0, year: 2022},
  {month: 1, year: 2022},
  {month: 2, year: 2022},
  {month: 3, year: 2022},
  {month: 4, year: 2022},
  {month: 5, year: 2022},
  {month: 6, year: 2022},
  {month: 7, year: 2022},
  {month: 8, year: 2022},
  {month: 9, year: 2022},
]

const budget = {
  active: 'planned',
  name: 'Family Budget',
  id: uuid(),
  monthlyBudgets: []
}

mbTargets.forEach((mb) => {
  budget.monthlyBudgets.push({
    id: uuid(),
    month: mb.month,
    year: mb.year,
    planned: 0,
    actual: 0,
    remaining: 0,
    categories: {
      income: categoryGenerator('income'),
      expense: categoryGenerator('expense'),
    }
  })
})

return budget
