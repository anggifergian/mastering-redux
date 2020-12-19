import { createAction } from '@reduxjs/toolkit'

export const API_CALL_BEGAN = createAction('apiCallBegan')
export const API_CALL_SUCCESS = createAction('apiCallSuccess')
export const API_CALL_FAILED = createAction('apiCallFailed')
