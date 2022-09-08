import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useProject } from './ProjectProvider'

export default function ReviewerInstructions () {
  const { project, setProject } = useProject()
  const [value, setValue] = useState(project.reviewerInstructions.content)

  useEffect(() => {
    // setInstructions(value, 'reviewerInstructions')
  }, [value])

  console.count('ReviewerInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
