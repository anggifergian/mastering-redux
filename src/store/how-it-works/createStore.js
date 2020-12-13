import reducer from './redux/reducer'

function createStore(reducer) {
  let store
  let listeners = []

  const getStore = () => store

  const dispatch = (action) => {
    store = reducer(store, action)

    for (let i = 0; i < listeners.length; i++) listeners[i]()
  }

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
    getStore,
    dispatch,
    subscribe,
  }
}

export default createStore(reducer)
