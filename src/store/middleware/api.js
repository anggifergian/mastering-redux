import axios from 'axios'
import { API_CALL_FAILED, API_CALL_SUCCESS } from '../api'

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== 'apiCallBegan') return next(action)

  next(action)

  const { url, method, data, onSuccess, onError } = action.payload

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:9001/api',
      url,
      method,
      data,
    })

    // General
    dispatch(API_CALL_SUCCESS(response.data))
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
  } catch (error) {
    // General
    dispatch(API_CALL_FAILED(error))
    // Specific
    if (onError) dispatch({ type: onError, payload: error })
  }
}

export default api
