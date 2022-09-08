import { createSlice, configureStore } from '@reduxjs/toolkit'
import model from '../project-model'

model.profile.updated = Date.now()
model.userInstructions.updated = Date.now()
model.reviewerInstructions.updated = Date.now()
model.warningInstructions.updated = Date.now()

const projectSlice = createSlice({
  name: 'project',
  initialState: model,
  reducers: {
    changeName (state, { payload }) {
      const profile = { ...state.profile, name: payload }
      return { ...state, profile }
    },

    changeOwner (state, { payload }) {
      const profile = { ...state.profile, owner: payload }
      return { ...state, profile }
    },

    updateInstructions (state, { payload }) {
      if (payload.type === 'userInstructions') {
        return { ...state, userInstructions: { content: payload.content, update: Date.now() } }
      } else if (payload.type === 'reviewerInstructions') {
        return { ...state, reviewerInstructions: { content: payload.content, update: Date.now() } }
      } else {
        return { ...state, warningInstructions: { content: payload.content, update: Date.now() } }
      }
    },

    updateField (state, action) {

    }
  }
})

export const { changeName, changeOwner, updateInstructions, updateField } = projectSlice.actions

export const store = configureStore({
  reducer: projectSlice.reducer
})

export const selectProject = (state) => state
