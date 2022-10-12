/* eslint-disable react/prop-types */
import React from 'react'
import Categories from './Categories'

const MonthlyBudget = () => {
  return (
    <div className="h-[calc(100%-12rem)] overflow-y-auto">
      <Categories />
    </div>
  )
}

export default MonthlyBudget
