import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useProject } from './ProjectProvider'

export default function ReviewerInstructions () {
  const { setReviewerInstructions } = useProject()
  const [value, setValue] = useState('Reviewer Instructions')

  useEffect(() => {
    setReviewerInstructions({
      content: value,
      updated: new Date()
    })
  }, [value])

  console.count('ReviewerInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
