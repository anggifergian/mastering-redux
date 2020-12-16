import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

let lastId = 0

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAssignToUser: (bug, action) => {
      const { userId, bugId } = action.payload
      const index = bug.findIndex((bug) => bug.id === bugId)
      bug[index].userId = userId
    },
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

export const { bugAdded, bugResolved, bugAssignToUser } = slice.actions
export default slice.reducer

export const getUnresolvedBugs = createSelector(
  (store) => store.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
)

export const getBugsByUser = (userId) =>
  createSelector(
    (store) => store.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  )
