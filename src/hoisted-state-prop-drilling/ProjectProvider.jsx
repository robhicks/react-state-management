import React, { createContext, useContext, useState } from 'react'

export const Project = createContext({})

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState({})

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
