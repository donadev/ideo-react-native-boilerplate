import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

// Set redux middlewares.
let middleware = [
  thunk
]

// Initialize redux store.
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers)

export default store
