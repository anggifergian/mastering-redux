import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { API_CALL_BEGAN } from './api'

let lastId = 0

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsReceived: (bug, action) => {
      bug.list = action.payload
    },
    bugAssignToUser: (bug, action) => {
      const { userId, bugId } = action.payload
      const index = bug.list.findIndex((bug) => bug.id === bugId)
      bug.list[index].userId = userId
    },
    bugAdded: (bug, action) => {
      bug.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      })
    },
    bugResolved: (bug, action) => {
      const index = bug.list.findIndex((bug) => bug.id === action.payload.id)
      bug.list[index].resolved = true
    },
  },
})

// Export actions and reducer
export const {
  bugAdded,
  bugResolved,
  bugAssignToUser,
  bugsReceived,
} = slice.actions
export default slice.reducer

// Load Bugs
const url = '/bugs'
export const loadBugs = () => {
  return API_CALL_BEGAN({
    url,
    onSuccess: bugsReceived.type,
  })
}

export const getUnresolvedBugs = createSelector(
  (store) => store.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
)

export const getBugsByUser = (userId) =>
  createSelector(
    (store) => store.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  )
