import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import store from './ProjectModel'

export default function WarningInstructions () {
  const [project] = useState(store)
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(project.warningInstructions?.content)
  }, [project.warningInstructions])

  const changeHandler = (val) => {
    setValue(val)
    project.updateInstructions('warning', val)
  }

  console.count('WarningInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={changeHandler} /></div>)
}
