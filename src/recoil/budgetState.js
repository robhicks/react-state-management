import { atom } from 'recoil'
import model from '../budget.model'
import { del, get, set } from '../db'

const key = 'budget'

const storageEffect = (key) => ({ setSelf, onSet, trigger }) => {
  const loadPersisted = async () => {
    const savedValue = await get(key)
    console.log(savedValue)
    if (savedValue !== null) {
      setSelf({ ...savedValue, active: 'planned', currentDate: new Date() })
    }
  }

  if (trigger === 'get') {
    loadPersisted()
  }

  onSet((newValue, _, isReset) => {
    isReset ? del(key) : set(key, newValue)
  })
}

const budgetState = atom({
  key: 'budgetState',
  default: model,
  effects: [storageEffect(key)]
})

export default budgetState
