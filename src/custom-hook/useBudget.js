import { useEffect, useState } from 'react'
import model from '../budget.model'
import { get, set } from '../db'

const key = 'budget'

export default () => {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })

  // load from IndexedDB
  useEffect(() => {
    get(key).then((bud) => {
      if (bud) {
        setBudget(({ ...model, ...bud, currentDate: new Date() }))
      }
    })
  }, [])

  // save to IndexedDb
  useEffect(() => {
    set(key, ({ id: budget.id, name: budget.name, monthlyBudgets: budget.monthlyBudgets }))
  }, [budget.id, budget.name, budget.monthlyBudgets])

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
