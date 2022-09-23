import React from 'react'
import Budget from './Budget'
import { Provider } from 'react-redux'
import { store } from './budget-store'

export default function Redux () {
  return (
    <div className="w-8/12 mx-auto py-4">
      <h1 className="prose prose-2xl mb-1">06-redux</h1>
        <Provider store={store}>
          <Budget />
        </Provider>
    </div>
  )
}
