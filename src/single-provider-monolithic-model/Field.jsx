import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useProject } from './ProjectProvider'

export default function Field ({ field, fieldSet }) {
  const { setProject } = useProject()

  const changeHandler = (val) => {
    field.help = val
    // updateField(field, fieldSet, val)
  }

  return (
    <div className="mt-1 p-1 hover:border-b border-gray-300 hover:bg-gray-50">
      <h3 className="text-lg mb-1">{field.name}</h3>
      <ReactQuill theme="snow" value={field.help} onChange={changeHandler} />
    </div>
  )
}
