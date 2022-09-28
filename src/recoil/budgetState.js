import { atom } from 'recoil'
import getModel from '../utils/budget-model-generator'

export const model = getModel()
model.currentDate = new Date()

const budgetState = atom({
  key: 'budgetState',
  default: model,
})

export default budgetState
