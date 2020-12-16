export const PLAYER_SUITTED = 'playerSuitted'

export const playerSuitted = (status) => ({
  type: PLAYER_SUITTED,
  payload: {
    status,
  },
})
