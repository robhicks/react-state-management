/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react'

export default function InPlaceEditor ({ setValue, value }) {
  const [edit, setEdit] = useState(false)
  const [localVal, setLocalVal] = useState(value)
  const inputEl = useRef(null)

  const changeHandler = (ev) => {
    setLocalVal(ev.target.value)
    setValue(ev.target.value)
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
      <input ref={inputEl} className={`border-0 ${!edit && 'hidden'}`} type="text" value={localVal || ''} onInput={changeHandler} onBlur={() => setEdit(false)} />
      <span className={`${edit && 'hidden'}`} onClick={setMode}>{localVal}</span>
    </>
  )
}
