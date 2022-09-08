import React, { useReducer } from 'react'
import ProjectProfile from './ProjectProfile'
import ProjectInstructions from './ProjectInstructions'
import Fieldsets from './Fieldsets'
import model from '../project-model'
import reducer from './reducer'

export default function Project () {
  const [project, dispatch] = useReducer(reducer, model)
  return (<>
    <ProjectProfile project={project} dispatch={dispatch} />
    <ProjectInstructions project={project} dispatch={dispatch} />
    <Fieldsets project={project} dispatch={dispatch} />
  </>)
}
