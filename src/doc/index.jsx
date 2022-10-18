import React from 'react'
import './index.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Doc () {
  return (
    <div className="w-8/12 mx-auto py-4 h-full overflow-y-auto">
        <h1>React State Management for Apps with Complex States</h1>
        <h2>Background</h2>
        <p>A few years ago I was involved in developing an administrative web application to allow users to create projects that other users would use to digitize the text from images. The app was  was written in native web components because we had recently been burned when the Angular team decided to rewrite Angular.</p>
        <p>Back then, largely in part because Angular 1.x had such horrible performance for two-way data bindings, the mantra for managing state in native web components was a one-way flow through string attributes for incoming data and emitting events to update state.</p>
        <p>In order to improve unit testing, we also composed the app of a lot of components. Each component had its job and it was easy to test.</p>
        <p>That’s when the wheels fell off the bus. The app was pig slow doing what needed to be done. Components were constantly re-rending, and multiple event listeners for state update events were a nightmare to debug.  We eventually go the app usable but it still suffers from state update issues. The app is currently being rewritten using React.</p>
        <p>About a year ago, I also became interested in Web 3 distributed apps. On a vacation to Yellowstone, my wife and I were using a personal budgeting app on our phones. It was useless because the app couldn’t get a decent internet connection. In addition, shortly after we got back, we were informed that another app we used had been hacked and our data was in the wild.</p>
        <p>Being frustrated, I decided I would write an offline first, real-time, distributed personal budgeting progressive web app to see if it could feasibly be done.  As I started doing so, I realized one of the challenges of the app was dealing with a fairly complex state.</p>
        <p>Being fairly new to React but knowing of the budgeting app’s state complexity, I began looking at the state management options available in the React ecosystem. Since there were/are a number of them, I then decided I needed a way to analyze them with the end of picking the right one for the budgeting app.</p>
        <p>In this document, we’re going build a personal budgeting app using various statement management options and then analyze them to determine which is best for the app. Note, it won’ t be an app that can be deployed because we won’t have implemented any security or persistence.</p>
        <h2>Analytical Framework</h2>
        <p>My analysis lead me to asking how do you know when you are dealing with complex state. If you’re not, you probably don’t need to worry about a solution to manage state and certainly don’t need an analytical framework to decide how to manage it.</p>
        <p>I concluded the way to decide if you are dealing with complex state is to determine 1) how many components are going to need to consume the state, 2) how many interdependencies will exist between different parts of the state, and 3) how many derived properties need to be calculated using the state.  If the answer to each is a large number, you probably need to start thinking about how to manage the state.</p>
        <p>Given the state management choices for the React, I decided to analyze the apparent choices against the following criteria:</p>
        <ul>
          <li>Easy to configure</li>
          <li>Easy to manage</li>
          <li>Easy to consume</li>
          <li>Easy to trouble shoot</li>
          <li>Performant</li>
        </ul>
        <h3>Easy to Configure</h3>
        <p>I don’t like complex things. While they may be cool to build, they are hard for people to understand. So for me, the ideal solution should be easy to configure, and implied in the ease of configuration, is an assumption that the solution should be easy to understand.</p>
        <h3>Easy to Manage</h3>
        <p>I also concluded the chosen solution should be easy to manage or maintain. I don’t like doing significant refactors when managing things. Large refactors mean breaking things.</p>
        <h3>Easy to Consume</h3>
        <p>Most of us work on projects with other engineers. Some are seasoned, some are not. The chosen solution should be easy to use for all engineers.</p>
        <p>A good example of what not to do is something I wrote several years ago. I wrote an isomorphic (browser and node) hypermedia client  to work with a specific, complex API. I thought it was elegant and pretty powerful. New people joining the team wanted to scream and run when they tried to use it. The ones wanting to scream and run were seasoned engineers. New engineers just cowered in the corner hoping and praying they would never have to use it, and secretly started looking for another team or job.</p>
        <h3>Easy to Troubleshoot</h3>
        <p>As I mentioned above, troubleshooting apps with complex state can be a real nightmare unless you either use tools to help manage state or you have a solid discipline of enforcing how state is managed. Some things I have learned, include the following:</p>
        <ul>
          <li>Push state as low as possible</li>
          <li>Corollary, to pushing state as low as possible is Hoisting state only when necessary</li>
          <li>Never modify the original state. Treat it as immutable even if it is not</li>
          <li>Don’t store derived state and calculate it where it’s needed</li>
        </ul>
        <p>Hopefully, the forgoing are intuitive and self explanatory because we aren’t going to spend more time on them except in the discipline used to analyze the various state management options.</p>
        <h3>Performant</h3>
        <p>Nobody likes to go into seemingly endless refactoring iterations because a code solution is so slow users complain.</p>
        <h2>React State Management Options</h2>
        <p>The budget app we’re going to build will be implemented in the following options:</p>
        <ul>
          <li>Hoisted - an app where the state is hoisted to the top and prop drilling is used to get it to the components that need it.</li>
          <li>Custom Hook - basically the same app as the Hoisted app but using a custom hook. Prop drilling is still used to make the state available to child components.</li>
          <li>Context Provider - the custom hook is basically integrated into a Context Provider to eliminate the need to drill props.</li>
          <li>Reducer - an app that uses useReducer and consolidates update functionality in the reducer.</li>
          <li>MobX - an app that integrates MobX for state management.</li>
          <li>Redux  - an app that integrates Redux for state management.</li>
          <li>Recoil  - an app that integrates Recoil for state management.</li>
        </ul>
        <h2>The Budgeting App</h2>
        <p>The app has been deployed on <a href="https://render.com/">render.com</a>. You can access it <a target="_blank" href="https://react-state-management.onrender.com/" rel="noreferrer">here</a>. It may take some time to load if it has been sleeping.</p>
        <p>The app has been developed using <a href="https://vitejs.dev/">Vite</a>, <a href="https://tailwindcss.com/">tailwindcss</a> and <a href="https://daisyui.com/">daisyUI</a>. Vite helps build and deploy things quickly, while using tailwindcss and daisyUI lets us focus on  React code instead of styling.</p>
        <p>The state is described by the following model:</p>
      <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
        {
`{
  "active": "string", 
  "name": "string",
  "id": "string",
  "monthlyBudgets": [
    {
      "id": "string",
      "month": "number",
      "year": "number",
      "categories": {
        "income": [],
        "expense": [
          { 
            "id": "string",
            "name": "string",
            "fund": "boolean",
            "items": [
              {
                "id": "string",
                "name": "string",
                "planned": "number",
                "transactions": [
                  { "id": "string", "amount": "number", "source": "string", "date": "date string"}
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}`}
      </SyntaxHighlighter>
        <p>Note that the model has been simplified to only work on one budget, say a family budget. A more complex model would support multiple budgets.</p>
        <video controls width="800px">
          <source src="./media/app-overview.webm" />
        </video>
        <p>The app has the following base custom React components for each implementation. :</p>
        <ul>
          <li>
            index.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
            {
`import React from 'react'
import Budget from './Budget'

export default function HoistedPropDrilling () {
  return (
    <div className="w-8/12 mx-auto py-4 h-full">
      <h1 className="prose prose-2xl mb-1">01-hoisted-state-prop-drilling</h1>
      <Budget />
    </div>
  )
}`}
          </SyntaxHighlighter>
            <p>index.jsx is the entry point for each of the implementations. The purpose of index.jsx is to set up the implementation and includes the Budget component.</p>
          </li>
          <li>
            Budget.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
{
`import React, { useEffect, useState } from 'react'
import getModel from '../utils/budget-model-generator'
import BudgetDatePicker from '../common/BudgetDatePicker'
import ActivityFilter from '../common/ActivityFilter'
import MonthlyBudgets from './MonthlyBudgets'
import InPlaceEditor from '../common/InPlaceEditor'
import { amountCalculator } from '../utils/budget-utils'
import { currency } from '../utils'

const model = getModel()

export default function Budget () {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const d = budget?.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    let currentBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)

    if (currentBudget) {
      currentBudget = amountCalculator(currentBudget)
      const planned = currentBudget.planned
      const actual = currentBudget.actual
      setRemaining(planned - actual)
    } else {
      setRemaining(0)
    }
  }, [budget.currentDate, budget.monthlyBudgets])

  const activityHandler = (val) => setBudget((cur) => ({ ...cur, active: val }))
  const currentDateHandler = (val) => setBudget((cur) => ({ ...cur, currentDate: val }))
  const nameChangeHandler = (val) => setBudget((cur) => ({ ...cur, name: val }))

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div><InPlaceEditor setValue={nameChangeHandler} value={budget.name} /> {currency(remaining)}</div>
        <BudgetDatePicker currentDate={budget.currentDate} setCurrentDate={currentDateHandler} />
      </div>
      <ActivityFilter active={budget.active} setActive={activityHandler} />
      <MonthlyBudgets budget={budget} setBudget={setBudget} />
    </div>
  )
}`
}
          </SyntaxHighlighter>
            <video controls width="800px">
              <source src="./media/hoisted-budget.jsx.webm" />
            </video>
            <p>We start with Budget.jsx. In the hoisted model, this is where state is handled. It is managed using a useState hook.</p>
            <p>We also use 3 other components, InPlaceEditor, BudgetDatePicker and ActivityFilter. These components are used by all of the implementations. The InPlaceEditor component is used to edit   properties, such as the budget name. The BudgetDatePicker component is used to set the current date, from which the month and year is calculated and is used to select a specific monthly budget. The ActivityFilter component is use to filter displayed values for amounts of the budget that are planned, actual and remaining</p>
            <p>The initial state is created using the getModel function found in /utils/budget-model-generator. We use the same starting model structure for all of the budget implementations. The initial state model includes monthly budgets for all of the months of 2022 through September.</p>
            <p>Two other things to note include a useEffect hook and handlers for changing the name of the budget and activity and current date for the budget.</p>
            <p>The purpose of the useEffect hook is to calculate the difference between what has been planned for a month and what has been spent for a month. We have named this ‘remaining’ throughout the budget.</p>
            <p>All of the handlers in the file use setBudget directly by passing in a callback to get the current value before apply an update to the value.</p>
            <p>Finally, we add budget and setBudget to the MonthlyBudgets component so that child components can access them or pass them to their children.</p>
          </li>
          <li>
            MonthlyBudgets.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
            {
`import React, { useEffect, useState } from 'react'
import MonthlyBudget from './MonthlyBudget'
import { copy } from '../utils'
import { genMonthlyBudget } from '../utils/budget-model-generator'

export default function MonthlyBudgets ({ budget, setBudget }) {
  const [monthlyBudget, setMonthlyBudget] = useState(false)

  useEffect(() => {
    const d = budget.currentDate ? new Date(budget.currentDate) : new Date()
    const month = d.getMonth()
    const year = d.getFullYear()
    const monthlyBudget = budget.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
    setMonthlyBudget(Boolean(monthlyBudget))
  }, [budget.currentDate, budget.monthlyBudgets])

  const createMonthlyBudget = () => {
    const bud = copy(budget)
    const month = budget.currentDate.getMonth()
    const year = budget.currentDate.getFullYear()
    const mb = genMonthlyBudget(month, year)
    bud.monthlyBudgets.push(mb)
    setBudget(bud)
  }

  if (monthlyBudget) {
    return <div className="h-full"><MonthlyBudget budget={budget} setBudget={setBudget} /></div>
  }
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title">Create Monthly Budget</h2>
        <p>A monthly budget does not exist for this month. </p>
        <div className="card-actions justify-end">
          <button onClick={createMonthlyBudget} className="btn btn-primary">Create Monthly Budget</button>
        </div>
      </div>
    </div>
  )
}`
            }
          </SyntaxHighlighter>
            <video controls width="800px">
              <source src="./media/hoisted-monthlybudgets.jsx.webm" />
            </video>
            <p>MonthlyBudgets is the only child component of the Budget component. It either displays a monthly budget, using the MonthlyBudget component, or displays a card which allows the user to create a monthly budget if one does not exist.</p>
            <p>MonthlyBudgets has two properties, the budget property and the setBudget property. Im the hoisted model these are passed through all of the components.</p>
            <p>Since the current monthly budget is just one of many monthly budgets in the model, the current monthly budget is selected through a useEffect hook. The useEffect hook changes when the current date changes for the monthly budgets change.</p>
            <p>The MonthlyBudgets component create new monthly budgets using a button handler and the getMonthlyBudget method in /utils/budget-model-generator. The getMonthlyBudget model generates a month that is structurally the same as other monthly budgets.</p>
            <p>The MonthlyBudgets component has a single MonthlyBudget component.</p>
          </li>
          <li>
            MonthlyBudget.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
            {
`import React from 'react'
import Categories from './Categories'

export default function MonthlyBudget ({ budget, setBudget }) {
  return (
    <div className="h-[calc(100%-12rem)] overflow-y-auto">
      <Categories budget={budget} setBudget={setBudget} />
    </div>
  )
}`
            }
          </SyntaxHighlighter>
            <p>The MonthlyBudget component is very simple. It creates a scrollable container to hold the categories associated with a monthly budget. Accordingly, it has one child component, Categories. It also passes it properties, budget and setBudget to the Categories component.</p>
          </li>
          <li>
            Categories.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
            {
              `
`
            }
          </SyntaxHighlighter>
            <p>The Categories component sets up two groups of categories, one for income categories and one for expense categories.</p>
            <p>It includes a useEffect to select the correct monthly budget based upon the current date and to calculate the planned, actual and remaining values for each of the income and expense group categories.</p>
            <p>It creates maps over the categories of the income and expense groups and passes the budget, category and setBudget properties to the mapped Category components.</p>
          </li>
          <li>
            Category.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
            {
              `
`
            }
          </SyntaxHighlighter>
            <p>The Category component calculates and displays the planned, actual and remaining balances of a category and displays items associated with the category.</p>
            <p>Note, rather than manipulating values of the model directly, we copy them when calculating the displayed amounts. We follow this practice throughout the implementations when necessary to prevent accidentally changing the model.</p>
          </li>
          <li>
            Item.jsx
          <SyntaxHighlighter language="javascript" style={dark} showLineNumbers>
            {
              `
`
            }
          </SyntaxHighlighter>
            <p>The Item component displays items and transactions for a category. It supports changing the name of the Item, changing the planned amount for an item and adding an empty transaction. It also calculates the planned, actual and remaining balances of each item.</p>
          </li>
        </ul>
    </div>
  )
}
