import { configureStore } from '@reduxjs/toolkit'
// import bugsReducer from './bugs/reducer'
import projectReducer from './projects'

export default function () {
  return configureStore({ reducer: projectReducer })
}
