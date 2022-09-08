import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useUserInstructions } from './UserInstructionsProvider'

export default function UserInstructions () {
  const { setUserInstructions } = useUserInstructions()
  const [value, setValue] = useState('User Instructions')

  useEffect(() => {
    setUserInstructions({
      content: value,
      updated: new Date()
    })
  }, [value])

  console.count('UserInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
