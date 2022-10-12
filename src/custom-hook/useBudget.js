import { useState } from 'react'
import getModel from '../utils/budget-model-generator'

const model = getModel()

export default () => {
  const [budget, setBudget] = useState({ ...model, currentDate: new Date() })

  return {
    budget,
    setBudget
  }
}
