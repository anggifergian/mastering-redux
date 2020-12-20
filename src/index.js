import { assignBugToUser, loadBugs } from './store/bugs'
import configureStore from './store/configureStore'

const store = configureStore()

store.dispatch(loadBugs())

setTimeout(() => {
  store.dispatch(assignBugToUser(100, 4))
}, 2000)
