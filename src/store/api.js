import { createAction } from '@reduxjs/toolkit'

export const API_CALL_BEGAN = createAction('api/CallBegan')
export const API_CALL_SUCCESS = createAction('api/CallSuccess')
export const API_CALL_FAILED = createAction('api/CallFailed')
