import context from '../../perf-results/context.json' assert { type: "json" };
import customHook from '../../perf-results/customHook.json' assert { type: "json" };
import hoisted from '../../perf-results/hoisted.json' assert { type: "json" };
import mobx from '../../perf-results/mobx.json' assert { type: "json" };
import recoil from '../../perf-results/recoil.json' assert { type: "json" };
import reducer from '../../perf-results/reducer.json' assert { type: "json" };
import redux from '../../perf-results/redux.json' assert { type: "json" };


const getNavigationTiming = (resource) => {
  const navigation = resource.perfEntries.find((entry) => entry.entryType === 'navigation')
  return navigation
}

const getResources = (resource, target) => {
  const resources = resource.perfEntries.filter((entry) => entry.entryType === 'resource' && (
    entry.name.includes('index.jsx') ||
    entry.name.includes('Budget.jsx') ||
    entry.name.includes('BudgetProvider.jsx') ||
    entry.name.includes('Categories.jsx') ||
    entry.name.includes('Category.jsx') ||
    entry.name.includes('Item.jsx') ||
    entry.name.includes('MonthlyBudgets.jsx') ||
    entry.name.includes('MonthlyBudget.jsx') ||
    entry.name.includes('Transaction.jsx') ||
    entry.name.includes('useBudget.js') ||
    entry.name.includes('BudgetModel.js') ||
    entry.name.includes('budgetState.js') ||
    entry.name.includes('reducer.js') ||
    entry.name.includes('budget-store.js')
  ))
  const targetEntry = resources.find((entry) => entry.name.includes(target))
  return targetEntry.duration
}

export const chartData = {
  context: {
    largestContentfulPaint: context.largestContentfulPaint,
    totalBlockingTime: context.totalBlockingTime,
    domInteractive: getNavigationTiming(context).domInteractive,
    domComplete: getNavigationTiming(context).domComplete,
    index: getResources(context, 'index.jsx'),
    Budget: getResources(context, 'Budget.jsx'),
    BudgetProvider: getResources(context, 'BudgetProvider.jsx'),
    Categories: getResources(context, 'Categories.jsx'),
    Category: getResources(context, 'Category.jsx'),
    Item: getResources(context, 'Item.jsx'),
    MonthlyBudgets: getResources(context, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(context, 'MonthlyBudget.jsx'),
    Transaction: getResources(context, 'Transaction.jsx'),
  },
  customHook: {
    largestContentfulPaint: customHook.largestContentfulPaint,
    totalBlockingTime: customHook.totalBlockingTime,
    domInteractive: getNavigationTiming(customHook).domInteractive,
    domComplete: getNavigationTiming(customHook).domComplete,
    index: getResources(customHook, 'index.jsx'),
    Budget: getResources(customHook, 'Budget.jsx'),
    Categories: getResources(customHook, 'Categories.jsx'),
    Category: getResources(customHook, 'Category.jsx'),
    Item: getResources(customHook, 'Item.jsx'),
    MonthlyBudgets: getResources(customHook, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(customHook, 'MonthlyBudget.jsx'),
    Transaction: getResources(customHook, 'Transaction.jsx'),
  },
  hoisted: {
    largestContentfulPaint: hoisted.largestContentfulPaint,
    totalBlockingTime: hoisted.totalBlockingTime,
    domInteractive: getNavigationTiming(hoisted).domInteractive,
    domComplete: getNavigationTiming(hoisted).domComplete,
    index: getResources(hoisted, 'index.jsx'),
    Budget: getResources(hoisted, 'Budget.jsx'),
    Categories: getResources(hoisted, 'Categories.jsx'),
    Category: getResources(hoisted, 'Category.jsx'),
    Item: getResources(hoisted, 'Item.jsx'),
    MonthlyBudgets: getResources(hoisted, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(hoisted, 'MonthlyBudget.jsx'),
    Transaction: getResources(hoisted, 'Transaction.jsx'),
  },
  mbox: {
    largestContentfulPaint: mobx.largestContentfulPaint,
    totalBlockingTime: mobx.totalBlockingTime,
    domInteractive: getNavigationTiming(mobx).domInteractive,
    domComplete: getNavigationTiming(mobx).domComplete,
    index: getResources(mobx, 'index.jsx'),
    Budget: getResources(mobx, 'Budget.jsx'),
    Categories: getResources(mobx, 'Categories.jsx'),
    Category: getResources(mobx, 'Category.jsx'),
    Item: getResources(mobx, 'Item.jsx'),
    MonthlyBudgets: getResources(mobx, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(mobx, 'MonthlyBudget.jsx'),
    Transaction: getResources(mobx, 'Transaction.jsx'),
  },
  recoil: {
    largestContentfulPaint: recoil.largestContentfulPaint,
    totalBlockingTime: recoil.totalBlockingTime,
    domInteractive: getNavigationTiming(recoil).domInteractive,
    domComplete: getNavigationTiming(recoil).domComplete,
    index: getResources(recoil, 'index.jsx'),
    Budget: getResources(recoil, 'Budget.jsx'),
    Categories: getResources(recoil, 'Categories.jsx'),
    Category: getResources(recoil, 'Category.jsx'),
    Item: getResources(recoil, 'Item.jsx'),
    MonthlyBudgets: getResources(recoil, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(recoil, 'MonthlyBudget.jsx'),
    Transaction: getResources(recoil, 'Transaction.jsx'),
  },
  reducer: {
    largestContentfulPaint: reducer.largestContentfulPaint,
    totalBlockingTime: reducer.totalBlockingTime,
    domInteractive: getNavigationTiming(reducer).domInteractive,
    domComplete: getNavigationTiming(reducer).domComplete,
    index: getResources(reducer, 'index.jsx'),
    Budget: getResources(reducer, 'Budget.jsx'),
    Categories: getResources(reducer, 'Categories.jsx'),
    Category: getResources(reducer, 'Category.jsx'),
    Item: getResources(reducer, 'Item.jsx'),
    MonthlyBudgets: getResources(reducer, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(reducer, 'MonthlyBudget.jsx'),
    Transaction: getResources(reducer, 'Transaction.jsx'),
  },
  redux: {
    largestContentfulPaint: redux.largestContentfulPaint,
    totalBlockingTime: redux.totalBlockingTime,
    domInteractive: getNavigationTiming(redux).domInteractive,
    domComplete: getNavigationTiming(redux).domComplete,
    index: getResources(redux, 'index.jsx'),
    Budget: getResources(redux, 'Budget.jsx'),
    Categories: getResources(redux, 'Categories.jsx'),
    Category: getResources(redux, 'Category.jsx'),
    Item: getResources(redux, 'Item.jsx'),
    MonthlyBudgets: getResources(redux, 'MonthlyBudgets.jsx'),
    MonthlyBudget: getResources(redux, 'MonthlyBudget.jsx'),
    Transaction: getResources(redux, 'Transaction.jsx'),
  },
}
