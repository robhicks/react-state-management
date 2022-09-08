import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import store from './ProjectModel'

const ProjectProfile = observer(() => {
  const [project] = useState(store)
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')

  useEffect(() => {
    if (name !== '') project.updateName(name)
  }, [name])

  useEffect(() => {
    if (owner !== '') project.updateOwner(owner)
  }, [owner])

  console.count('ProjectProfile')
  return (
    <div className="p-2 border border-gray-300">
      <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Profile</h1>
      <h2>Project Name: {project?.profile?.name}</h2>
      <h2>Project Owner: {project?.profile?.owner}</h2>
      <div>{project?.profile?.updated?.toDateString()}</div>
      <div className="flex flex-col">
        <input placeholder="project name" onInput={(ev) => setName(ev.target.value)} value={name} />
        <input placeholder="project owner" onInput={(ev) => setOwner(ev.target.value)} value={owner} />
      </div>
    </div>
  )
})

export default ProjectProfile
