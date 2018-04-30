import {
  START_APPLICATION_LOADING,
  STOP_APPLICATION_LOADING,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  TOGGLE_DRAWER
} from '../constants/actionTypes'

/**
 * @function startLoading
 * @description This function updates the store to save the information about the application
 * initial data loading.
 */
export function startLoading () {
  return { type: START_APPLICATION_LOADING }
}

/**
 * @function stopLoading
 * @description This function updates the store to save the information about the application
 * final data loading.
 */
export function stopLoading () {
  return { type: STOP_APPLICATION_LOADING }
}

/**
 * @function openDrawer
 * @description This function opens the application drawer.
 */
export function openDrawer () {
  return { type: OPEN_DRAWER }
}

/**
 * @function closeDrawer
 * @description This function closes the application drawer.
 */
export function closeDrawer () {
  return { type: CLOSE_DRAWER }
}

/**
 * @function toggleDrawer
 * @description This function toggles the application drawer.
 */
export function toggleDrawer () {
  return { type: TOGGLE_DRAWER }
}
