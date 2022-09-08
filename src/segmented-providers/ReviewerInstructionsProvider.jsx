import React, { createContext, useContext, useState } from 'react'

export const ReviewerInstructions = createContext({})

export const ReviewerInstructionsProvider = ({ children }) => {
  const [reviewerInstructions, setReviewerInstructions] = useState({})

  return (
    <ReviewerInstructions.Provider
      value={{
        reviewerInstructions,
        setReviewerInstructions
      }}
    >
      {children}
    </ReviewerInstructions.Provider>
  )
}

export const useReviewerInstructions = () => {
  return useContext(ReviewerInstructions)
}
