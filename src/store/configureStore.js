import { configureStore } from '@reduxjs/toolkit'
// import bugsReducer from './bugs/reducer'
// import projectReducer from './projects'
import reducer from './rootReducer'

export default function () {
  return configureStore({ reducer })
}
