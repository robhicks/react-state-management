# React State Management in Complex Applications

This document focusses on managing state in React applications that have complex states. States can be considered complex if they are required by a large number of components, are large and cannot be destructured practically and easily into smaller segments, or require internal consistencies that would make them difficult to manage if separated.

The goal of managing complex states in an application should be focussed on the following guiding principles:

1. They should be easy to configure.
2. They should be easy to manage.
3. They should be easy to consume.
4. They should be easy to troubleshoot.
5. They should be performant.

## Complex States

### Large Number of Consumers

Adopting the unix philosophy of do one thing and do it well, today's best practices teach us to subdivide application functionality into many components. While that makes it easy to build and test components independently, it also results in greater problems in managing overall application state. Take as an example, a personal finance budgeting application. The state for the application will likely include multiple budgets, multiple year and monthly budgets, income and expense categories, planning activities and transaction tracking. Overall, a personal finance budgeting application should present the user with a birds-eye view of all financial activity, while each transaction needs to have visibility into a specific piece of state while supporting broader state update functionality.

### Interconnected State

###

## Tools for State Management

React itself and the React echo system offer a lot of potential tools to help manage state. The tools range from hoisted state and prop drilling to libraries like Redux, Recoil and MobX. But unfortunately, the number of tools also makes it difficult to choose one. To help in making better choices, we'll build a contrived application using a number of different tools. Then we'll be in a better position to analyze each against the goals stated above.

## Test Application

We're going to build part of a budgeting application for personal finance. The application will support multiple budgets, each supporting one more more monthly/year budgets, and each of them with income and expense categories, and each category with planning and transaction tracking.

We're going to build the application using Vite and TailwindCss so we can focus on code and not UI Libraries. We won't go into the steps necessary to create a Vite React app with TailwindCss. You can find them at the [Vite](https://vitejs.dev/guide/#overview) and [TailwindCss](https://tailwindcss.com/docs/installation) sites.

### Hoisted State and Prop Drilling

We'll start using hoisted state and prop drilling because it is the most basic way of managing state. Typically, building an app in this manner is iterative. We start using local state for each component and then pass the props we need to child components. Eventually, we arrive at a point where we have hoisted state to where it should live based upon our model. We have an advantage because we know the shape of the model. Here's the model:

``` JavaScript
{
  active: 'planned',
  name: 'Family Budget',
  id: '55f83ae6-7e27-43e5-80be-6f0b4342fe03',
  monthlyBudgets: [
    {
      id: '539836ee-fc18-42f9-b9c5-19d8d270db64',
      month: 8,
      year: 2022,
      planned: 0,
      actual: 0,
      remaining: 0,
      categories: {
        income: [
          {
            name: 'Employment',
            id: '7b947dca-e089-4f6d-bb8d-8b6fc689baba',
            type: 'income',
            planned: 0,
            actual: 0,
            remaining: 0,
            fund: false,
            items: [
              {
                name: 'Paycheck #1',
                id: '4d09c030-b269-4790-a6c5-5c3d9e78fcb1',
                planned: 0,
                actual: 0,
                remaining: 0,
                transactions: []
              },
              {
                name: 'Paycheck #2',
                id: '256e67f4-0999-4064-9194-3dd64f869aa6',
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
            id: 'bf19eaa4-29ff-48fe-aba1-3893192b166f',
            name: 'Housing',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: '9bbe16ff-f3fc-4511-b4f7-7daeca884fae',
                name: 'Mortgage Payments',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '6dd780be-9a5f-4bb2-9516-9aa5c248ce13',
                name: 'Maintenance',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: '1a678221-38a5-45dd-a590-77259e983b2b',
            name: 'Transportation',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: 'e76f5955-0833-4a12-9942-88827484031f',
                name: 'Car Purchase',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '2e519ded-97e5-4bb4-8f7b-31c13e2bd23e',
                name: 'Fuel',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '6665a437-ec03-40e0-a89a-dd700512476b',
                name: 'Maintenance',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: '058d6f9a-ecac-4153-8bc3-8e7ef0b831a0',
            name: 'Food',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: '9f371c12-9702-40fd-bfdb-207083477619',
                name: 'Groceries',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '44e41b21-55a9-4537-9c47-596dd03c4e72',
                name: 'Restaurants',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: 'f478df81-97e8-4af6-b20d-401c0ea43efe',
            name: 'Health',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: 'd1edb431-6c54-4a02-a2b0-b1740a22109f',
                name: 'Wellness Checks',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: 'f5159bda-5afa-403f-9cb1-88befa568923',
                name: 'Medications',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '6e030249-cd36-424f-81df-61cee6a33b43',
                name: 'Gym Membership',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: 'c271500d-15ae-40aa-a661-d340565751c7',
            name: 'Insurance',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: 'd3c3c1af-ec92-46d8-b491-7aefa3ec29dc',
                name: 'Auto',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '00cc10d9-1edf-4feb-96e5-1df03882c989',
                name: 'House',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: 'bdfd1424-e34f-4244-be5e-536afd7b99a2',
                name: 'Life',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: '38af7798-5f65-42ae-89c5-91e735b7af49',
            name: 'Savings',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: 'df476fc7-68dc-4f27-9cd3-422350091786',
                name: 'Emergency Fund',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '39b5bf3e-0ef4-48df-94b7-075b2f365faa',
                name: 'Charles Schwab',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: 'd269e647-e65e-459d-a049-8d06b7f30a19',
                name: "Zion's Banks",
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: '30cc32f8-3794-44fd-9630-14182c569a16',
            name: 'Giving',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: 'c82a60b2-7915-4427-8c70-2bdd9c390a1d',
                name: 'Tithing',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: 'bcacaaad-384e-424a-b95f-8553cdc3c88c',
                name: 'Fast Offerings',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '83df0cd8-db82-4523-8097-a282b01c025e',
                name: 'Other Charitable Contributions',
                planned: 0,
                remaining: 0,
                transactions: []
              }
            ]
          },
          {
            actual: 0,
            id: 'f8f2133e-f2d9-4d79-bdc1-77f3c01fb281',
            name: 'Debt',
            planned: 0,
            remaining: 0,
            type: 'expense',
            fund: false,
            items: [
              {
                actual: 0,
                id: '778e4730-73f4-4087-97a5-57dfe87290cc',
                name: 'Mastercard',
                planned: 0,
                remaining: 0,
                transactions: []
              },
              {
                actual: 0,
                id: '11ce6851-bd2e-4f4e-89bf-16185134c627',
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
```