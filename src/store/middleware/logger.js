const logger = (params) => (store) => (next) => (action) => {
  next(action)
}

export default logger
