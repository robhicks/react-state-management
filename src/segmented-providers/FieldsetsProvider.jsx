import React, { createContext, useContext, useState } from 'react'
import projectModel from '../project-model'

export const Fieldsets = createContext({})

export const FieldsetsProvider = ({ children }) => {
  const [fieldsets, setFieldsets] = useState(projectModel.fieldsets)

  return (
    <Fieldsets.Provider
      value={fieldsets}
    >
      {children}
    </Fieldsets.Provider>
  )
}

export const useFieldsets = () => {
  return useContext(Fieldsets)
}
