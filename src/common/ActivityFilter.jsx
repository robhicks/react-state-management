/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

export default function ActivityFilter ({ active, setActive }) {
  const [planned, setPlanned] = useState('')
  const [actual, setActual] = useState('')
  const [remaining, setRemaining] = useState('')

  useEffect(() => {
    setPlanned(active === 'planned' ? 'bg-primary text-white' : 'bg-secondary text-grey-500')
    setActual(active === 'actual' ? 'bg-primary text-white' : 'bg-secondary text-grey-500')
    setRemaining(active === 'remaining' ? 'bg-primary text-white' : 'bg-secondary text-grey-500')
  }, [active])

  return (
    <div className="flex h-12">
      <button onClick={() => setActive('planned')} className={`rounded-l-xl w-full ${planned}`}>
        Planned
      </button>
      <button onClick={() => setActive('actual')} className={`w-full ${actual}`}>
        Actual
      </button>
      <button onClick={() => setActive('remaining')} className={`rounded-r-xl w-full ${remaining}`}>
        Remaining
      </button>
    </div>
  )
}
