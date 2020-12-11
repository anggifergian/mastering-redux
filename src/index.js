import store from './store/store'
import * as actions from './store/bugs/actions'

store.dispatch(actions.bugAdded('Bug 1'))
store.dispatch(actions.bugAdded('Bug 1'))
store.dispatch(actions.bugResolved(1))

console.log(store.getStore())
