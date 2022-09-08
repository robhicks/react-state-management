import React, { createContext, useContext, useState } from 'react'
import model from '../project-model'

export const Project = createContext({})

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(model)

  return (
    <Project.Provider
      value={{
        project,
        setProject
      }}
    >
      {children}
    </Project.Provider>
  )
}

export const useProject = () => {
  return useContext(Project)
}
