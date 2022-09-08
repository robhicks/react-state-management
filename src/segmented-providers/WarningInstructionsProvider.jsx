import React, { createContext, useContext, useState } from 'react'

export const WarningInstructions = createContext({})

export const WarningInstructionsProvider = ({ children }) => {
  const [warningInstructions, setWarningInstructions] = useState({})

  return (
    <WarningInstructions.Provider
      value={{
        warningInstructions,
        setWarningInstructions
      }}
    >
      {children}
    </WarningInstructions.Provider>
  )
}

export const useWarningInstructions = () => {
  return useContext(WarningInstructions)
}
