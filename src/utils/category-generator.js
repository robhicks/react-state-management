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
      planned: 5000,
      actual: 5000,
      remaining: 0,
      fund: false,
      items: [
        {
          name: 'Paycheck #1',
          id: uuid(),
          planned: 2500,
          actual: 2500,
          remaining: 0,
          transactions: [
            { id: uuid(), amount:  2500, source: 'Work', date: add(d, { days: 4 }).toISOString().substring(0, 10) }
          ]
        },
        {
          name: 'Paycheck #2',
          id: uuid(),
          planned: 2500,
          actual: 2500,
          remaining: 0,
          transactions: [
            { id: uuid(), amount:  2500, source: 'Work', date: add(d, {days: 20}).toISOString().substring(0, 10) }
          ]
        }
      ]
    } ]
  } else {
    const cats = [
      {
        actual: 1100,
        id: uuid(),
        name: 'Housing',
        planned: 1100,
        remaining: 0,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 1000,
            id: uuid(),
            name: 'Mortgage Payments',
            planned: 1000,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  1000, source: 'Mortgage Company', date: d.toISOString().substring(0, 10) }
            ]
          },
          {
            actual: 100,
            id: uuid(),
            name: 'Maintenance',
            planned: 100,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  1000, source: 'Mortgage Company', date: add(d, {days: 15}).toISOString().substring(0, 10) }
            ]
          }
        ]
      },
      {
        actual: 500.25,
        id: uuid(),
        name: 'Transportation',
        planned: 450,
        remaining: -100.25,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 250,
            id: uuid(),
            name: 'Car Purchase',
            planned: 250,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  250, source: 'Car Finance Company', date: d.toISOString().substring(0, 10) }
            ]
          },
          {
            actual: 164,
            id: uuid(),
            name: 'Fuel',
            planned: 150,
            remaining: -14,
            transactions: [
              { id: uuid(), amount:  75, source: 'Maverick', date: d.toISOString().substring(0, 10) },
              { id: uuid(), amount:  89, source: 'Chevron', date: add(d, { days: 15 }).toISOString().substring(0, 10) }
            ]
          },
          {
            actual: 86.25,
            id: uuid(),
            name: 'Maintenance',
            planned: 50,
            remaining: -36.25,
            transactions: [
              { id: uuid(), amount:  86.25, source: 'Havoline Express', date: add(d, {days: 24}).toISOString().substring(0, 10) },
            ]
          }
        ]
      },
      {
        actual: 450,
        id: uuid(),
        name: 'Food',
        planned: 550,
        remaining: 100,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 400,
            id: uuid(),
            name: 'Groceries',
            planned: 500,
            remaining: 100,
            transactions: [
              { id: uuid(), amount:  150, source: 'Smiths', date: add(d, { days: 2 }).toISOString().substring(0, 10) },
              { id: uuid(), amount:  100, source: 'Smiths', date: add(d, { days: 9 }).toISOString().substring(0, 10) },
              { id: uuid(), amount:  100, source: 'Smiths', date: add(d, { days: 15 }).toISOString().substring(0, 10) },
              { id: uuid(), amount:  50, source: 'Smiths', date: add(d, { days: 22 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 50,
            id: uuid(),
            name: 'Restaurants',
            planned: 50,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  25, source: 'Smash Burgers', date: add(d, { days: 4 }).toISOString().substring(0, 10) },
              { id: uuid(), amount:  25, source: 'Costa Vida', date: add(d, { days: 20 }).toISOString().substring(0, 10) },
            ]
          }
        ]
      },
      {
        actual: 37.45,
        id: uuid(),
        name: 'Health',
        planned: 50,
        remaining: 12.55,
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
            actual: 12.5,
            id: uuid(),
            name: 'Medications',
            planned: 25,
            remaining: 12.5,
            transactions: [
              { id: uuid(), amount:  12.5, source: 'Smiths Pharmacy', date: add(d, { days: 7 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 24.95,
            id: uuid(),
            name: 'Gym Membership',
            planned: 25,
            remaining: .05,
            transactions: [
              { id: uuid(), amount:  24.95, source: 'Vasa Fitness', date: add(d, { days: 1 }).toISOString().substring(0, 10) },
            ]
          }
        ]
      },
      {
        actual: 124,
        id: uuid(),
        name: 'Insurance',
        planned: 125,
        remaining: 1,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 49.50,
            id: uuid(),
            name: 'Auto',
            planned: 50,
            remaining: .5,
            transactions: [
              { id: uuid(), amount:  49.50, source: 'Esurance', date: add(d, { days: 3 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 49.5,
            id: uuid(),
            name: 'House',
            planned: 50,
            remaining: .50,
            transactions: [
              { id: uuid(), amount:  49.50, source: 'Esurance', date: add(d, { days: 3 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 25,
            id: uuid(),
            name: 'Life',
            planned: 25,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  25, source: 'Esurance', date: add(d, { days: 22 }).toISOString().substring(0, 10) },
            ]
          }
        ]
      },
      {
        actual: 50,
        id: uuid(),
        name: 'Savings',
        planned: 50,
        remaining: 0,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 25,
            id: uuid(),
            name: 'Emergency Fund',
            planned: 25,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  25, source: 'Zions Banks', date: add(d, { days: 26 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 25,
            id: uuid(),
            name: 'Investments',
            planned: 25,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  25, source: 'Charles Schwab', date: add(d, { days: 26 }).toISOString().substring(0, 10) },
            ]
          }
        ]
      },
      {
        actual: 560,
        id: uuid(),
        name: 'Giving',
        planned: 560,
        remaining: 0,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 500,
            id: uuid(),
            name: 'Tithing',
            planned: 500,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  250, source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) },
              { id: uuid(), amount:  250, source: 'LDS Church', date: add(d, { days: 22 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 50,
            id: uuid(),
            name: 'Fast Offerings',
            planned: 50,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  50, source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 10,
            id: uuid(),
            name: 'Other Charitable Contributions',
            planned: 10,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  10, source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) },
            ]
          }
        ]
      },
      {
        actual: 65,
        id: uuid(),
        name: 'Debt',
        planned: 65,
        remaining: 0,
        type: 'expense',
        fund: false,
        items: [
          {
            actual: 40,
            id: uuid(),
            name: 'Mastercard',
            planned: 40,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  40, source: 'Zions Bank', date: add(d, { days: 24 }).toISOString().substring(0, 10) },
            ]
          },
          {
            actual: 2,
            id: uuid(),
            name: 'Signature Loan',
            planned: 25,
            remaining: 0,
            transactions: [
              { id: uuid(), amount:  25, source: 'Zions Bank', date: add(d, { days: 24 }).toISOString().substring(0, 10) },
            ]
          }
        ]
      }
    ]
    categories = [...categories, ...cats]
  }

  return categories
}