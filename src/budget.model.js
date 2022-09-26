import { uuid } from './utils'

export default {
  active: 'planned',
  name: 'Family Budget',
  id: uuid(),
  monthlyBudgets: [
    {
      id: uuid(),
      month: 8,
      year: 2022,
      planned: 0,
      actual: 0,
      remaining: 0,
      categories: {
        income: [
          {
            name: 'Employment',
            id: uuid(),
            type: 'income',
            planned: 0,
            actual: 0,
            remaining: 0,
            fund: false,
            items: [
              {
                name: 'Paycheck #1',
                id: uuid(),
                planned: 0,
                actual: 0,
                remaining: 0,
                transactions: []
              },
              {
                name: 'Paycheck #2',
                id: uuid(),
                planned: 0,
                actual: 0,
                remaining: 0,
                transactions: []
              }
            ]
          }
        ],
        expense: [
          {
            actual: 0,
            id: uuid(),
            name: 'Housing',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Mortgage Payments',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Maintenance',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Transportation',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Car Purchase',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Fuel',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Maintenance',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Food',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Groceries',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Restaurants',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Health',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Wellness Checks',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Medications',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Gym Membership',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Insurance',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Auto',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'House',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Life',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Savings',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Emergency Fund',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Charles Schwab',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: "Zion's Banks",
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Giving',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Tithing',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Fast Offerings',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Other Charitable Contributions',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: uuid(),
            name: 'Debt',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: uuid(),
                name: 'Mastercard',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: uuid(),
                name: 'Signature Loan',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          }
        ]
      }
    }
  ]
}
