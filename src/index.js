// import store from './store/store'
import * as actions from './store/bugs/actions'
import { bugAdded } from './store/bugs/bugs'
import configureStore from './store/configureStore'
import { projectAdded } from './store/projects'

const store = configureStore()
store.dispatch(projectAdded({ name: 'Project 1' }))
store.dispatch(projectAdded({ name: 'Project 2' }))

// store.dispatch(actions.bugAdded('Bug 1'))
// store.dispatch(actions.bugAdded('Bug 2'))
// store.dispatch(actions.bugResolved(1))

console.log(store.getState())
