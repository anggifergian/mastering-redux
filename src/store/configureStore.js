import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './rootReducer'
import logger from './middleware/logger'
import toast from './middleware/toast'
import api from './middleware/api'

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      api,
      logger({ destination: 'console' }),
      toast,
    ],
  })
}
