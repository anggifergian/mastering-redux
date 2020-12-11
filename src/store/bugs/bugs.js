import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bug, action) => {
      bug.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      })
    },
    bugResolved: (bug, action) => {
      const index = bug.findIndex((bug) => bug.id === action.payload.id)
      bug[index].resolved = true
    },
  },
})

export const { bugAdded, bugResolved } = slice.actions
export default slice.reducer
