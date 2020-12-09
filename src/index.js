import store from './createStore'
import * as actions from './redux/actions'

store.subscribe(() => {
  console.log('Store changed!')
})
store.dispatch(actions.bugAdded('Bug 1'))

console.log(store.getStore())
