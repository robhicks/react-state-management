/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react'

export default function InPlaceEditor ({ setValue, value }) {
  const [edit, setEdit] = useState(false)
  const [localVal, setLocalVal] = useState(value)
  const inputEl = useRef(null)

  const changeHandler = (ev) => {
    const { value } = ev.target
    setLocalVal(value)
    setValue(value)
  }

  const keydownHandler = (e) => {
    const { key } = e
    if (key === 'Enter' || key === 'Escape') {
      setEdit(false)
    }
  }

  const setMode = () => {
    setEdit(true)
    inputEl.current.focus()
  }

  useEffect(() => {
    setLocalVal(value)
  }, [value])

  return (
    <>
      <input ref={inputEl} className={`border-0 outline-none pl-0 text-xl ${!edit && 'hidden'}`} type="text" value={localVal || ''} onKeyDown={keydownHandler} onInput={changeHandler} onBlur={() => setEdit(false)} />
      <span className={` text-xl py-2 pr-1 ${edit && 'hidden'}`} onClick={setMode}>{localVal}</span>
    </>
  )
}
