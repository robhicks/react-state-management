import { makeAutoObservable } from 'mobx'
import model from '../project-model'

export class ProjectModel {
  constructor (model) {
    Object.assign(this, model)
    makeAutoObservable(this)
  }

  updateName (newName) {
    this.profile.name = newName
    this.profile.updated = new Date()
  }

  updateOwner (newOwner) {
    this.profile.owner = newOwner
    this.profile.updated = new Date()
  }

  updateInstructions (type, content) {
    const updated = new Date()
    if (type === 'user') {
      this.userInstructions = {
        content,
        updated
      }
    } else if (type === 'reviewer') {
      this.reviewerInstructions = {
        content,
        updated
      }
    } else {
      this.warningInstructions = {
        content,
        updated
      }
    }
  }

  updateField (field, nVal) {
    field.help = nVal
  }
}

const store = new ProjectModel(model)

export default store
