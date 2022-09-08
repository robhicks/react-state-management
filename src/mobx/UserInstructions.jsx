import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import store from './ProjectModel'

export default function UserInstructions () {
  const [project] = useState(store)
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(project.userInstructions?.content)
  }, [project.userInstructions])

  const changeHandler = (val) => {
    setValue(val)
    project.updateInstructions('user', val)
  }

  console.count('UserInstructions')
  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={changeHandler} /></div>)
}
