import store from './redux/store'
import { bugAdded, bugResolved } from './redux/actions'

store.dispatch(bugAdded('bug2'))
store.dispatch(bugResolved(1))

console.log(store.getState())
