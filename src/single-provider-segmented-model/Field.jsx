import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useProject } from './ProjectProvider'

export default function Field ({ field, fieldSet }) {
  const { fieldsets, setFieldsets } = useProject()

  const changeHandler = (val) => {
    if (val) {
      const fset = fieldsets.find((fs) => fs.id === fieldSet.id)
      const fld = fset.fields.find((f) => f.labelId === field.labelId)
      if (fld) {
        fld.help = val
        setFieldsets(fieldsets)
      }
    }
  }

  // console.count('Field')
  return (
    <div className="mt-1 p-1 hover:border-b border-gray-300 hover:bg-gray-50">
      <h3 className="text-lg mb-1">{field.name}</h3>
      <ReactQuill theme="snow" value={field.help} onChange={changeHandler} />
    </div>
  )
}
