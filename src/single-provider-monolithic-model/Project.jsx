import React from 'react'
import ProjectProfile from './ProjectProfile'
import ProjectInstructions from './ProjectInstructions'
import Fieldsets from './Fieldsets'
import { ProjectProvider } from './ProjectProvider'

export default function Project () {
  return (<>
    <ProjectProvider>
      <ProjectProfile />
      <ProjectInstructions />
      <Fieldsets />
    </ProjectProvider>
  </>)
}
