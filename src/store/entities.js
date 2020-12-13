import { combineReducers } from 'redux'
import bugs from './bugs/bugs'
import projects from './projects'

export default combineReducers({
  bugs,
  projects,
})
