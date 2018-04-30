import { StyleSheet } from 'react-native'
import colors from './colors'
import sizes from './sizes'

const styles = {

  // Elements:

  spacer: {
    height: 15
  },
  spacerX2: {
    height: 30
  },
  spacerX3: {
    height: 45
  },
  spacerX4: {
    height: 60
  },

  // Containers:

  containerNormal: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    width: sizes.fullWidth
  },
  containerCentered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.fullWidth,
    height: sizes.fullHeight
  },

  // Helpers:

  fullWidth: {
    width: sizes.fullWidth
  }
}

export default StyleSheet.create(styles)
