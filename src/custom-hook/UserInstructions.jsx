import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import useProject from './useProject'

export default function UserInstructions () {
  const { project, setInstructions } = useProject()
  const [value, setValue] = useState(project.userInstructions.content)

  useEffect(() => {
    setInstructions(value, 'userInstructions')
  }, [value])

  console.count('UserInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
