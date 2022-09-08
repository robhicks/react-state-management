import React, { useState } from 'react'
import { useProject } from './ProjectProvider'

export default function ProjectProfile () {
  const { project, setName, setOwner } = useProject()
  const [localName, setLocalName] = useState()
  const [localOwner, setLocalOwner] = useState()

  const nameChange = (ev) => {
    const value = ev.target.value
    setLocalName(value)
    setName(value)
  }

  const ownerChange = (ev) => {
    const value = ev.target.value
    setLocalOwner(value)
    setOwner(value)
  }

  console.count('ProjectProfile')
  return (
    <div className="p-2 border border-gray-300">
      <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Profile</h1>
      <h2>Project Name: {project?.profile?.name}</h2>
      <h2>Project Owner: {project?.profile?.owner}</h2>
      <div>{project?.profile?.updated?.toDateString()}</div>
      <div className="flex flex-col">
        <input placeholder="project name" onInput={nameChange} value={localName} />
        <input placeholder="project owner" onInput={ownerChange} value={localOwner} />
      </div>
    </div>
  )
}
