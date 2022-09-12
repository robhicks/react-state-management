import React, { useEffect, useState } from 'react'

export default function ProjectProfile ({ project, setProject }) {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [updated, setUpdated] = useState(new Date())

  useEffect(() => {
    if (name !== '') {
      setProject({
        ...project,
        profile: {
          ...project.profile,
          name,
          updated: new Date()
        }
      })
    }
  }, [name])

  useEffect(() => {
    if (owner !== '') {
      setProject({
        ...project,
        profile: {
          ...project.profile,
          owner,
          updated: new Date()
        }
      })
    }
  }, [owner])

  useEffect(() => {
    if (project.profile?.name) setName(project.profile.name)
    if (project.profile?.owner) setOwner(project.profile.owner)
    setUpdated(new Date(project.profile?.updated))
  }, [project.profile])

  console.count('ProjectProfile')
  return (
    <div className="p-2 border border-gray-300">
      <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Profile</h1>
      <h2>Project Name: {project?.profile?.name}</h2>
      <h2>Project Owner: {project?.profile?.owner}</h2>
      <div>{updated.toDateString()}</div>
      <div className="flex flex-col">
        <input placeholder="project name" onInput={(ev) => setName(ev.target.value)} value={name} />
        <input placeholder="project owner" onInput={(ev) => setOwner(ev.target.value)} value={owner} />
      </div>
    </div>
  )
}
