import { uuid } from './index'
import add from 'date-fns/add'

export default (type, month, year) => {
  let categories = []

  const d = new Date(year, month, 1)

  if (type === 'income') {
    categories = [...categories, {
      name: 'Employment',
      id: uuid(),
      type: 'income',
      fund: false,
      items: [
        {
          name: 'Paycheck #1',
          id: uuid(),
          planned: 2500,
          transactions: [
            { id: uuid(), amount: 2500, source: 'Work', date: add(d, { days: 4 }).toISOString().substring(0, 10) }
          ]
        },
        {
          name: 'Paycheck #2',
          id: uuid(),
          planned: 2500,
          actual: 2500,
          remaining: 0,
          transactions: [
            { id: uuid(), amount: 2500, source: 'Work', date: add(d, { days: 20 }).toISOString().substring(0, 10) }
          ]
        }
      ]
    }]
  } else {
    const cats = [
      {
        id: uuid(),
        name: 'Housing',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Mortgage Payments',
            planned: 1000,
            transactions: [
              { id: uuid(), amount: 1000, source: 'Mortgage Company', date: d.toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Maintenance',
            planned: 100,
            transactions: [
              { id: uuid(), amount: 1000, source: 'Mortgage Company', date: add(d, { days: 15 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Transportation',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Car Purchase',
            planned: 250,
            transactions: [
              { id: uuid(), amount: 250, source: 'Car Finance Company', date: d.toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Fuel',
            planned: 150,
            transactions: [
              { id: uuid(), amount: 75, source: 'Maverick', date: d.toISOString().substring(0, 10) },
              { id: uuid(), amount: 89, source: 'Chevron', date: add(d, { days: 15 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Maintenance',
            planned: 50,
            transactions: [
              { id: uuid(), amount: 86.25, source: 'Havoline Express', date: add(d, { days: 24 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Food',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Groceries',
            planned: 500,
            transactions: [
              { id: uuid(), amount: 150, source: 'Smiths', date: add(d, { days: 2 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: 100, source: 'Smiths', date: add(d, { days: 9 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: 100, source: 'Smiths', date: add(d, { days: 15 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: 50, source: 'Smiths', date: add(d, { days: 22 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Restaurants',
            planned: 50,
            transactions: [
              { id: uuid(), amount: 25, source: 'Smash Burgers', date: add(d, { days: 4 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: 25, source: 'Costa Vida', date: add(d, { days: 20 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Health',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Wellness Checks',
            planned: 0,
            transactions: []
          },
          {
            id: uuid(),
            name: 'Medications',
            planned: 25,
            transactions: [
              { id: uuid(), amount: 12.5, source: 'Smiths Pharmacy', date: add(d, { days: 7 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Gym Membership',
            planned: 25,
            transactions: [
              { id: uuid(), amount: 24.95, source: 'Vasa Fitness', date: add(d, { days: 1 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Insurance',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Auto',
            planned: 50,
            transactions: [
              { id: uuid(), amount: 49.50, source: 'Esurance', date: add(d, { days: 3 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'House',
            planned: 50,
            transactions: [
              { id: uuid(), amount: 49.50, source: 'Esurance', date: add(d, { days: 3 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Life',
            planned: 25,
            transactions: [
              { id: uuid(), amount: 25, source: 'Esurance', date: add(d, { days: 22 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Savings',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Emergency Fund',
            planned: 25,
            transactions: [
              { id: uuid(), amount: 25, source: 'Zions Banks', date: add(d, { days: 26 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Investments',
            planned: 25,
            transactions: [
              { id: uuid(), amount: 25, source: 'Charles Schwab', date: add(d, { days: 26 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Giving',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Tithing',
            planned: 500,
            transactions: [
              { id: uuid(), amount: 250, source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: 250, source: 'LDS Church', date: add(d, { days: 22 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Fast Offerings',
            planned: 50,
            transactions: [
              { id: uuid(), amount: 50, source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Other Charitable Contributions',
            planned: 10,
            transactions: [
              { id: uuid(), amount: 10, source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        id: uuid(),
        name: 'Debt',
        type: 'expense',
        fund: false,
        items: [
          {
            id: uuid(),
            name: 'Mastercard',
            planned: 40,
            transactions: [
              { id: uuid(), amount: 40, source: 'Zions Bank', date: add(d, { days: 24 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Signature Loan',
            planned: 25,
            transactions: [
              { id: uuid(), amount: 25, source: 'Zions Bank', date: add(d, { days: 24 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      }
    ]
    categories = [...categories, ...cats]
  }

  return categories
}
