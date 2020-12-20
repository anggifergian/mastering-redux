import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { API_CALL_BEGAN } from './api'
import moment from 'moment'

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequestFailed: (bug, action) => {
      bug.loading = false
    },
    bugsRequested: (bug, actions) => {
      bug.loading = true
    },
    bugsReceived: (bug, action) => {
      bug.list = action.payload
      bug.loading = false
      bug.lastFetch = Date.now()
    },
    bugAssignToUser: (bug, action) => {
      const { userId, id: bugId } = action.payload
      const index = bug.list.findIndex((bug) => bug.id === bugId)
      bug.list[index].userId = userId
    },
    bugAdded: (bug, action) => {
      bug.list.push(action.payload)
      bug.loading = false
    },
    bugResolved: (bug, action) => {
      const index = bug.list.findIndex((bug) => bug.id === action.payload.id)
      bug.list[index].resolved = true
    },
  },
})

const {
  bugAdded,
  bugResolved,
  bugAssignToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions
export default slice.reducer

const url = '/bugs'

/*========== Load bugs ==========*/
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs

  // Prevent making api request when last fetch less than 10 minutes
  const diffInMinutes = moment().diff(moment(lastFetch), 'm')
  if (diffInMinutes < 10) return

  dispatch(
    API_CALL_BEGAN({
      url,
      onSuccess: bugsReceived.type,
      onRequested: bugsRequested.type,
      onError: bugsRequestFailed.type,
    })
  )
}

/*========== Adding bug ==========*/
export const addBug = (bugs) => {
  return API_CALL_BEGAN({
    url,
    method: 'post',
    data: bugs,
    onSuccess: bugAdded.type,
    onRequested: bugsRequested.type,
    onError: bugsRequestFailed.type,
  })
}

/*========== Resolving bug ==========*/
export const resolveBug = (id) => {
  return API_CALL_BEGAN({
    url: `/bugs/${id}`,
    method: `patch`,
    data: { resolved: true },
    onSuccess: bugResolved.type,
    onRequested: bugsRequested.type,
    onError: bugsRequestFailed.type,
  })
}

/*======= Assigning bug to User =======*/
export const assignBugToUser = (userId, bugId) => {
  return API_CALL_BEGAN({
    url: `/bugs/${bugId}`,
    method: `patch`,
    data: { userId },
    onSuccess: bugAssignToUser.type,
    onRequested: bugsRequested.type,
    onError: bugsRequestFailed.type,
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
