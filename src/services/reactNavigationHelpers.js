import { NavigationActions } from 'react-navigation'

/**
 * @function resetTo
 * @description This function reset the current view with a new.
 * @param {object} navigation
 * @param {string} routeName
 */
export function resetTo (navigation, routeName, index = 0) {
  const resetAction = NavigationActions.reset({
    index: index,
    actions: [NavigationActions.navigate({ routeName })]
  })

  navigation.dispatch(resetAction)
}
