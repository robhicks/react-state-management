import React, { createContext, useContext, useState } from 'react'
import model from '../project-model'

export const Project = createContext({})

export const ProjectProvider = ({ children }) => {
  const [projectProfile, setProjectProfile] = useState(model.profile)
  const [userInstructions, setUserInstructions] = useState(model.userInstructions)
  const [reviewerInstructions, setReviewerInstructions] = useState(model.reviewerInstructions)
  const [warningInstructions, setWarningInstructions] = useState(model.warningInstructions)
  const [fieldsets, setFieldsets] = useState(model.fieldsets)

  return (
    <Project.Provider
      value={{
        fieldsets,
        projectProfile,
        reviewerInstructions,
        setFieldsets,
        setProjectProfile,
        setReviewerInstructions,
        setUserInstructions,
        setWarningInstructions,
        userInstructions,
        warningInstructions
      }}
    >
      {children}
    </Project.Provider>
  )
}

export const useProject = () => {
  return useContext(Project)
}
