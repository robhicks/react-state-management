import React from 'react'
import Project from './Project'
import { Provider } from 'react-redux'
import { store } from './store'

export default function Redux () {
  return (
    <div className="w-8/12 mx-auto py-4">
      <h1 className="prose prose-2xl mb-1">08-redux</h1>
        <Provider store={store}>
          <Project />
        </Provider>
    </div>
  )
}
