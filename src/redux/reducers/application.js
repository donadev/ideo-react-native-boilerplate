import {
  START_APPLICATION_LOADING,
  STOP_APPLICATION_LOADING,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_DRAWER
} from '../constants/actionTypes'

/**
 * @const initialState
 * @description The initial state of the reducer.
 */
const initialState = {
  isLoading: false,
  isDrawerOpen: false
}

/**
 * @function reducer
 * @description The reducer used to manage the application.
 * @param {object} state
 * @param {object} action
 */
function reducer (state = initialState, action) {
  switch (action.type) {
    case START_APPLICATION_LOADING:
      return { ...state, isLoading: true }
    case STOP_APPLICATION_LOADING:
      return { ...state, isLoading: false }
    case OPEN_DRAWER:
      return { ...state, isDrawerOpen: true }
    case CLOSE_DRAWER:
      return { ...state, isDrawerOpen: false }
    case TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen}
    default :
      return state
  }
}

export default reducer
