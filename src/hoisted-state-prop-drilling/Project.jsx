import React, { useState } from 'react'
import ProjectProfile from './ProjectProfile'
import ProjectInstructions from './ProjectInstructions'
import Fieldsets from './Fieldsets'
import model from '../project-model'

export default function Project () {
  const [project, setProject] = useState(model)

  // useEffect(() => {
  //   console.log('project', project)
  // }, [project])

  return (<>
    <ProjectProfile project={project} setProject={setProject} />
    <ProjectInstructions project={project} setProject={setProject} />
    <Fieldsets project={project} setProject={setProject} />
  </>)
}
