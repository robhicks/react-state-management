import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useWarningInstructions } from './WarningInstructionsProvider'

export default function WarningInstructions () {
  const { setWarningInstructions } = useWarningInstructions()
  const [value, setValue] = useState('Warning Instructions')

  useEffect(() => {
    setWarningInstructions({
      content: value,
      updated: new Date()
    })
  }, [value])

  console.count('WarningInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
