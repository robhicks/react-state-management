import React from 'react'
import Budget from './Budget'

export default function CustomHook () {
  return (
    <div className="w-8/12 mx-auto py-4 h-full">
      <h1 className="prose prose-2xl mb-1">03-custom-hook</h1>
      <Budget />
    </div>
  )
}
