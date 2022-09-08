import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import store from './ProjectModel'

export default function ReviewerInstructions () {
  const [project] = useState(store)
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(project.reviewerInstructions?.content)
  }, [project.reviewerInstructions])

  const changeHandler = (val) => {
    setValue(val)
    project.updateInstructions('reviewer', val)
  }

  console.count('ReviewerInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={changeHandler} /></div>)
}
