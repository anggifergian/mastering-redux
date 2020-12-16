import configureStore from './store/configureStore'
import { userAdded } from './store/users'
import {
  bugAdded,
  bugResolved,
  bugAssignToUser,
  getBugsByUser,
} from './store/bugs'

// Setup store
const store = configureStore()
store.subscribe(() => {
  console.log('Store changed!')
})

// Users
store.dispatch(userAdded({ name: 'Anggi' }))
store.dispatch({
  type: 'error',
  payload: { message: 'Error in auth' },
})
// store.dispatch(userAdded({ name: 'Samsul' }))

// Bugs
// store.dispatch(bugAdded({ description: 'Bug 1' }))
// store.dispatch(bugAdded({ description: 'Bug 2' }))
// store.dispatch(bugAdded({ description: 'Bug 3' }))
// store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }))
// store.dispatch(bugResolved({ id: 1 }))

// State
const state = store.getState()
console.log(state.entities)

// const bugs = getBugsByUser(1)(store.getState())
// console.log(bugs)
