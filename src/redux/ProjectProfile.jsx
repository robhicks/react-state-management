import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectProject, changeName, changeOwner } from './store'

export default function ProjectProfile () {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const project = useSelector(selectProject)
  const dispatch = useDispatch()
  const [updated, setUpdated] = useState(new Date())

  useEffect(() => {
    if (name !== '') {
      dispatch(changeName(name))
    }
  }, [name])

  useEffect(() => {
    if (owner !== '') {
      dispatch(changeOwner(owner))
    }
  }, [owner])

  useEffect(() => {
    setUpdated(new Date(project.profile.updated))
  }, [project.profile.updated])

  console.log('project', project)

  console.count('ProjectProfile')
  return (
    <div className="p-2 border border-gray-300">
      <h1 className="text-xl text-center pb-1 mb-1 border-b border-gray-300">Project Profile</h1>
      <h2>Project Name: {project?.profile?.name}</h2>
      <h2>Project Owner: {project?.profile?.owner}</h2>
      <div>{updated?.toDateString()}</div>
      <div className="flex flex-col">
        <input placeholder="project name" onInput={(ev) => setName(ev.target.value)} value={name} />
        <input placeholder="project owner" onInput={(ev) => setOwner(ev.target.value)} value={owner} />
      </div>
    </div>
  )
}
