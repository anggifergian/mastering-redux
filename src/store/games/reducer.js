import { PLAYER_SUITTED } from './actions'

export default function reducer(status = {}, action) {
  switch (action.type) {
    case PLAYER_SUITTED:
      return {
        ...status,
        status: action.payload.status,
      }
    default:
      status
  }
}
