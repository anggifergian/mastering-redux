import { createSlice } from '@reduxjs/toolkit'

let initialId = 0

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++initialId,
        name: action.payload.name,
      })
    },
  },
})

export const { projectAdded } = slice.actions
export default slice.reducer
