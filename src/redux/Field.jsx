import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { updateField } from './store'

export default function Field ({ field, fieldSet, dispatch }) {
  const changeHandler = (val) => {
    dispatch(updateField({ fieldset: fieldSet, field, update: val }))
  }

  return (
    <div className="mt-1 p-1 hover:border-b border-gray-300 hover:bg-gray-50">
      <h3 className="text-lg mb-1">{field.name}</h3>
      <ReactQuill theme="snow" value={field.help} onChange={changeHandler} />
    </div>
  )
}
