import React, { createContext, useContext, useState } from 'react'
import model from '../project-model'

export const ProjectProfile = createContext({})

export const ProjectProfileProvider = ({ children }) => {
  const [projectProfile, setProjectProfile] = useState(model.profile)

  return (
    <ProjectProfile.Provider
      value={{
        projectProfile,
        setProjectProfile
      }}
    >
      {children}
    </ProjectProfile.Provider>
  )
}

export const useProjectProfile = () => {
  return useContext(ProjectProfile)
}
