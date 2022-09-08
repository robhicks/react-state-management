import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectProject, updateInstructions } from './store'

export default function UserInstructions () {
  const [value, setValue] = useState('User Instructions')
  const project = useSelector(selectProject)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateInstructions({ type: 'userInstructions', content: value }))
  }, [value])

  console.count('UserInstructions')

  return (<div className="pb-2"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>)
}
