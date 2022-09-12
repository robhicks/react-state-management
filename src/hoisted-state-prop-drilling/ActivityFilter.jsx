/* eslint-disable react/prop-types */
import React from 'react'

export default function ActivityFilter ({ active, setActive }) {
  return (
    <div className="flex bg-secondary h-12">
      <button onClick={() => setActive('planned')} className={`w-full ${active === 'planned' && 'bg-primary'}`}>Planned</button>
      <button onClick={() => setActive('actual')} className={`w-full ${active === 'actual' && 'bg-primary'}`}>Actual</button>
      <button onClick={() => setActive('remaining')} className={`w-full ${active === 'remaining' && 'bg-primary'}`}>Remaining</button>
    </div>
  )
}
