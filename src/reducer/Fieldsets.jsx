import React, { useState } from 'react'
import Field from './Field'

export default function Fieldsets ({ project, dispatch }) {
  const firstFieldset = project?.fieldsets[0] || {}
  const secondFieldset = project?.fieldsets[1] || {}
  const [active, setActive] = useState(firstFieldset)
  const [activeFieldset, setActiveFieldset] = useState(firstFieldset)

  const switchActive = (name) => {
    setActive(name)
    if (name === 'first') setActiveFieldset(firstFieldset)
    else setActiveFieldset(secondFieldset)
  }

  return (
    <div>
      <h2 className="text-xl text-center border-b border-gray-300 pb-1 mb-1">Field Sets</h2>
      <div className="tabs mt-3">
        <a onClick={() => switchActive('first')} className={`tab tab-lifted ${active === 'first' && ' tab-active'}`}>{firstFieldset.name}</a>
        <a onClick={() => switchActive('second')} className={`tab tab-lifted ${active === 'second' && ' tab-active'}`}>{secondFieldset.name}</a>
      </div>
      <div>
        {activeFieldset.fields.map((field) => <Field key={field.labelId} fieldSet={firstFieldset} dispatch={dispatch} field={field} />)}
      </div>
    </div>
  )
}
