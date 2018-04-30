import { Dimensions } from 'react-native'
import device from '@config/device'

const sizes = {

  // Dimensions:

  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,

  // Fixed elements:

  statusBarHeight: (device.os.ios ? 16 : 0),
  headerHeight: (device.os.ios ? 64 : 54),
  bottomNavigationHeight: (device.os.android ? 24 : 0)
}

export default sizes
