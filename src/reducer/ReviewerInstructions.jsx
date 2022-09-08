import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function ReviewerInstructions ({ project, dispatch }) {
  const [value, setValue] = useState('Reviewer Instructions')

  useEffect(() => {
    dispatch({ type: 'updateInstructions', data: { content: value, type: 'reviewerInstructions' } })
  }, [value])

  console.count('ReviewerInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
