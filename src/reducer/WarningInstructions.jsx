import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function WarningInstructions ({ project, dispatch }) {
  const [value, setValue] = useState('Warning Instructions')

  useEffect(() => {
    dispatch({ type: 'updateInstructions', data: { content: value, type: 'warningInstructions' } })
  }, [value])

  console.count('WarningInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
