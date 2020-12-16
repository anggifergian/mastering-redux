import { configureStore } from '@reduxjs/toolkit'
import reducer from './rootReducer'

export default function () {
  return configureStore({ reducer })
}
