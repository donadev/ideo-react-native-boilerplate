import { combineReducers } from 'redux'

import applicationReducer from './application'

// Combine all reducers.
const combine = combineReducers({
  application: applicationReducer
})

// Export root reducer.
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state
  return combine(newState, action)
}

export default rootReducer
