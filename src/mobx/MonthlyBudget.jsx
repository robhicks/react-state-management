/* eslint-disable react/prop-types */
import React from 'react'
import Categories from './Categories'
import { observer } from 'mobx-react-lite'

const MonthlyBudget = observer(() => {
  return (
    <div className="h-[calc(100%-12rem)] overflow-y-auto">
      <Categories />
    </div>
  )
})

export default MonthlyBudget
