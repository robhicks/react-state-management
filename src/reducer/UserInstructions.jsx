import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function UserInstructions ({ project, dispatch }) {
  const [value, setValue] = useState('User Instructions')

  useEffect(() => {
    dispatch({ type: 'updateInstructions', data: { type: 'userInstructions', content: value } })
  }, [value])

  console.count('UserInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
