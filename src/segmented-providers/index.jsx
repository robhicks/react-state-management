import React from 'react'
import Project from './Project'
import { ProjectProfileProvider } from './ProjectProfileProvider'
import { UserInstructionsProvider } from './UserInstructionsProvider'
import { ReviewerInstructionsProvider } from './ReviewerInstructionsProvider'
import { WarningInstructionsProvider } from './WarningInstructionsProvider'
import { FieldsetsProvider } from './FieldsetsProvider'

export default function SegmentedProviders () {
  return (
    <div className="w-8/12 mx-auto py-4">
      <h1 className="prose prose-2xl mb-1">06-segmented-providers</h1>
      <ProjectProfileProvider>
        <UserInstructionsProvider>
          <ReviewerInstructionsProvider>
            <WarningInstructionsProvider>
              <FieldsetsProvider>
                <Project />
              </FieldsetsProvider>
            </WarningInstructionsProvider>
          </ReviewerInstructionsProvider>
        </UserInstructionsProvider>
      </ProjectProfileProvider>
    </div>
  )
}
