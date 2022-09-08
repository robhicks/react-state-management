import React, { createContext, useContext, useState } from 'react'

export const UserInstructions = createContext({})

export const UserInstructionsProvider = ({ children }) => {
  const [userInstructions, setUserInstructions] = useState({})

  return (
    <UserInstructions.Provider
      value={{
        userInstructions,
        setUserInstructions
      }}
    >
      {children}
    </UserInstructions.Provider>
  )
}

export const useUserInstructions = () => {
  return useContext(UserInstructions)
}
