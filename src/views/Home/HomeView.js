import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import theme from '@theme'

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

class HomeView extends Component {
  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <View
        style={[theme.styles.containerCentered, { backgroundColor: theme.colors.white, padding: 15 }]}
      >
        <Text
          style={styles.message}
        >Welcome to this new awesome application!</Text>
        <View
          style={theme.styles.spacer}
        />
      </View>
    )
  }
}

HomeView.propTypes = {
  goToDev: PropTypes.func
}

export default HomeView
