import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native'
import PropTypes from 'prop-types'
import theme from '@theme'
import logo from '@assets/images/logo.png'

const styles = StyleSheet.create({
  image: {
    maxWidth: (theme.sizes.fullWidth / 2),
    maxHeight: 100
  }
})

class LaunchView extends Component {
  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <View
        style={[theme.styles.containerCentered, { backgroundColor: theme.colors.white }]}
      >
        <Image
          style={styles.image}
          source={logo}
          resizeMode='contain'
        />
        <View
          style={theme.styles.spacer}
        />
        {
          this.props.showSpinner ? (
            <ActivityIndicator
              color={theme.colors.darkGrey}
            />
          ) : null
        }
      </View>
    )
  }
}

LaunchView.propTypes = {
  showSpinner: PropTypes.bool
}

export default LaunchView
