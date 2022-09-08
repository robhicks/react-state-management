import React, { useEffect, useState } from 'react'
import { useProjectProfile } from './ProjectProfileProvider'

export default function ProjectProfile () {
  const { projectProfile, setProjectProfile } = useProjectProfile()
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')

  useEffect(() => {
    if (name !== '') {
      setProjectProfile({
        ...projectProfile,
        name,
        updated: new Date()
      })
    }
  }, [name])

  useEffect(() => {
    if (owner !== '') {
      setProjectProfile({
        ...projectProfile,
        owner,
        updated: new Date()
      })
    }
  }, [owner])

  useEffect(() => {
    if (projectProfile?.name) setName(projectProfile.name)
    if (projectProfile?.owner) setOwner(projectProfile.owner)
  }, [projectProfile])

  console.count('ProjectProfile')
  return (
    <div className="p-2 border border-gray-300">
      <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Profile</h1>
      <h2>Project Name: {projectProfile.name}</h2>
      <h2>Project Owner: {projectProfile.owner}</h2>
      <div>{projectProfile?.updated?.toDateString()}</div>
      <div className="flex flex-col">
        <input placeholder="project name" onInput={(ev) => setName(ev.target.value)} value={name} />
        <input placeholder="project owner" onInput={(ev) => setOwner(ev.target.value)} value={owner} />
      </div>
    </div>
  )
}
