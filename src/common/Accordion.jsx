/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import { currency } from '../utils'

export default function Accordion ({ amount, border, children, selector, title }) {
  const [open, setOpen] = useState(false)
  const [displayAmount, setDisplayAmount] = useState(0)

  useEffect(() => {
    if (typeof amount === 'string') {
      if (amount?.includes('$')) setDisplayAmount(amount)
      else setDisplayAmount(currency(Number(amount)))
    } else if (!Number.isNaN(amount)) {
      setDisplayAmount(currency(amount))
    }
  }, [amount])

  const toggle = () => setOpen(!open)

  return (
    <div className={`relative ${border && 'border border-gray-300 rounded-xl'} px-2 py-4 mt-2`}>
      {amount !== 'undefined' && <span className="absolute top-4 right-8">{displayAmount}</span>}
      <button onClick={toggle} className={`absolute top-4 right-2 w-6 h-6 ${selector}`}>
        <svg height="20" width="20"><path d={open ? mdiChevronUp : mdiChevronDown}></path></svg>
      </button>
      <span className="text-xl">{title}</span>
      {open && <>{children}</>}
    </div>
  )
}
