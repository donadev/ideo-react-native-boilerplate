import { Platform } from 'react-native'

const device = {

  os: {
    ios: (Platform.OS === 'ios'),
    android: (Platform.OS === 'android')
  }

}

export default device
