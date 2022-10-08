import { uuid } from './index'
import add from 'date-fns/add'
import { faker } from '@faker-js/faker'

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
          planned: faker.finance.amount(1000, 3000),
          transactions: [
            { id: uuid(), amount: faker.finance.amount(1000, 3000), source: 'Work', date: add(d, { days: 4 }).toISOString().substring(0, 10) }
          ]
        },
        {
          name: 'Paycheck #2',
          id: uuid(),
          planned: faker.finance.amount(1000, 3000),
          remaining: 0,
          transactions: [
            { id: uuid(), amount: faker.finance.amount(1000, 3000), source: 'Work', date: add(d, { days: 20 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(1000, 1500),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(1000, 1500), source: 'Mortgage Company', date: d.toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Maintenance',
            planned: faker.finance.amount(50, 150),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(25, 300), source: 'Everything Electric', date: add(d, { days: 15 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(100, 500),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(100, 500), source: 'Car Finance Company', date: d.toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Fuel',
            planned: 150,
            transactions: [
              { id: uuid(), amount: faker.finance.amount(50, 80), source: 'Maverick', date: d.toISOString().substring(0, 10) },
              { id: uuid(), amount: faker.finance.amount(50, 80), source: 'Chevron', date: add(d, { days: 15 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Maintenance',
            planned: faker.finance.amount(0, 500),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(0, 500), source: 'Havoline Express', date: add(d, { days: 24 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(300, 600),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(50, 100), source: 'Smiths', date: add(d, { days: 2 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: faker.finance.amount(50, 100), source: 'Smiths', date: add(d, { days: 9 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: faker.finance.amount(50, 100), source: 'Smiths', date: add(d, { days: 15 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: faker.finance.amount(50, 100), source: 'Smiths', date: add(d, { days: 22 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Restaurants',
            planned: faker.finance.amount(10, 75),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(5, 30), source: 'Smash Burgers', date: add(d, { days: 4 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: faker.finance.amount(5, 30), source: 'Costa Vida', date: add(d, { days: 20 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(0, 25),
            transactions: []
          },
          {
            id: uuid(),
            name: 'Medications',
            planned: faker.finance.amount(5, 10),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(5, 10), source: 'Smiths Pharmacy', date: add(d, { days: 7 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Gym Membership',
            planned: faker.finance.amount(10, 35),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(10, 35), source: 'Vasa Fitness', date: add(d, { days: 1 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(10, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(10, 100), source: 'Esurance', date: add(d, { days: 3 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'House',
            planned: faker.finance.amount(10, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(10, 100), source: 'Esurance', date: add(d, { days: 3 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Life',
            planned: faker.finance.amount(10, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(10, 100), source: 'Esurance', date: add(d, { days: 22 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(15, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(15, 100), source: 'Zions Banks', date: add(d, { days: 26 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Investments',
            planned: faker.finance.amount(10, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(10, 100), source: 'Charles Schwab', date: add(d, { days: 26 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(300, 500),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(150, 250), source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) },
              { id: uuid(), amount: faker.finance.amount(150, 250), source: 'LDS Church', date: add(d, { days: 22 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Fast Offerings',
            planned: faker.finance.amount(25, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(25, 100), source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Other Charitable Contributions',
            planned: faker.finance.amount(5, 50),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(5, 50), source: 'LDS Church', date: add(d, { days: 8 }).toISOString().substring(0, 10) }
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
            planned: faker.finance.amount(10, 100),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(10, 100), source: 'Zions Bank', date: add(d, { days: 24 }).toISOString().substring(0, 10) }
            ]
          },
          {
            id: uuid(),
            name: 'Signature Loan',
            planned: faker.finance.amount(19, 75),
            transactions: [
              { id: uuid(), amount: faker.finance.amount(19, 75), source: 'Zions Bank', date: add(d, { days: 24 }).toISOString().substring(0, 10) }
            ]
          }
        ]
      }
    ]
    categories = [...categories, ...cats]
  }

  return categories
}
