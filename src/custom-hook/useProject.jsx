import { useCallback, useState } from 'react'
import model from '../project-model'

const copy = (obj) => JSON.parse(JSON.stringify(obj))

export default function useProject () {
  const [project, setProject] = useState(model)

  const setName = useCallback((name) => setProject({ ...project, profile: { ...project.profile, name, updated: new Date() } }), [])
  const setOwner = useCallback((owner) => setProject({ ...project, profile: { ...project.profile, owner, updated: new Date() } }), [])

  const setInstructions = useCallback((content, type) => {
    if (type === 'userInstructions') {
      setProject({
        ...project,
        userInstructions: {
          content,
          updated: new Date()
        }
      })
    } else if (type === 'reviewerInstructions') {
      setProject({
        ...project,
        reviewerInstructions: {
          content,
          updated: new Date()
        }
      })
    } else {
      setProject({
        ...project,
        warningInstructions: {
          content,
          updated: new Date()
        }
      })
    }
  }, [])

  const updateField = useCallback((field, fieldset, value) => {
    const mod = copy(model)
    const fldset = mod.fieldsets.find((fs) => fs.id === fieldset.id)
    const fld = fldset.fields.find((f) => f.uid === field.uid)
    if (fld?.help) {
      fld.help = value
      setProject({ ...project, ...mod })
    }
  }, [])

  return { project, setName, setOwner, setInstructions, updateField }
}
