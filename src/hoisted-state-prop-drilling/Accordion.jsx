/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

export default function Accordion ({ amount, border, children, title }) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <div className={`relative ${border && 'border border-gray-300 rounded-lg'} px-2 py-4 mt-2`}>
      {amount !== 'undefined' && <span className="absolute top-4 right-8">{amount}</span>}
      <button onClick={toggle} className="absolute top-4 right-2 w-6 h-6">
        <svg height="20" width="20"><path d={open ? mdiChevronUp : mdiChevronDown}></path></svg>
      </button>
      <span className="text-xl">{title}</span>
      {open && <>{children}</>}
    </div>
  )
}
