import React, { useEffect, useState } from 'react'

export default function ProjectProfile ({ project, dispatch }) {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [updated, setUpdated] = useState(new Date())

  useEffect(() => {
    setUpdated(new Date(project.profile.updated))
  }, [project.profile])

  useEffect(() => {
    if (name !== '') {
      dispatch({ type: 'changeName', data: name })
    }
  }, [name])

  useEffect(() => {
    if (owner !== '') {
      dispatch({ type: 'changeOwner', data: owner })
    }
  }, [owner])

  console.log('project', project)
  console.log('updated', updated)

  console.count('ProjectProfile')
  return (
    <div className="p-2 border border-gray-300">
      <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Profile</h1>
      <h2>Project Name: {project?.profile?.name}</h2>
      <h2>Project Owner: {project?.profile?.owner}</h2>
      <div>{updated.toLocaleDateString()}</div>
      <div className="flex flex-col">
        <input placeholder="project name" onInput={(ev) => setName(ev.target.value)} value={name} />
        <input placeholder="project owner" onInput={(ev) => setOwner(ev.target.value)} value={owner} />
      </div>
    </div>
  )
}
