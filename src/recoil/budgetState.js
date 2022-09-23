import { atom } from 'recoil'
import model from '../budget.model'
import { del, get, set } from '../db'

const key = 'budget'

const storageEffect = (key) => ({ setSelf, onSet, trigger }) => {
  const loadPersisted = async () => {
    const currentDate = new Date()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const savedValue = await get(key)
    if (savedValue !== null) {
      const currentBudget = savedValue.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
      setSelf({ ...savedValue, active: 'planned', currentDate, currentBudget })
    } else {
      const currentBudget = model.monthlyBudgets.find((mb) => mb.month === month && mb.year === year)
      setSelf({ ...model, active: 'planned', currentDate, currentBudget })
    }
  }

  if (trigger === 'get') {
    loadPersisted()
  }

  onSet((newValue, _, isReset) => {
    isReset ? del(key) : set(key, ({ id: newValue.id, name: newValue.name, monthlyBudgets: newValue.monthlyBudgets }))
  })
}

const budgetState = atom({
  key: 'budgetState',
  default: model,
  effects: [storageEffect(key)]
})

export default budgetState
