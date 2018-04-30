import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import theme from '@theme'
import logo from '@assets/images/logo.png'

const stylesSectionHeight = (theme.sizes.headerHeight - theme.sizes.statusBarHeight - 10)

const styles = StyleSheet.create({
  container: {
    width: theme.sizes.fullWidth,
    height: theme.sizes.headerHeight,
    backgroundColor: theme.colors.lightGrey
  },
  sections: {
    flex: 1,
    flexDirection: 'row'
  },
  section: {
    width: (theme.sizes.fullWidth / 3),
    height: stylesSectionHeight,
    marginTop: (theme.sizes.statusBarHeight + 5)
  },
  sectionLeft: {
    alignItems: 'flex-start',
    marginLeft: 5
  },
  sectionRight: {
    alignItems: 'flex-end',
    marginRight: 5
  },
  logo: {
    width: (theme.sizes.fullWidth / 3),
    height: (stylesSectionHeight - 10),
    marginTop: 5
  }
})

class NavigatorHeaderView extends Component {
  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  renderLeftSection () {
    if (this.props.currentViewIndex > 0) {
      return (
        <View
          style={[styles.section, styles.sectionLeft]}
        >
          <TouchableOpacity
            onPress={this.props.goBack}
          >
            <Icon
              name='keyboard-arrow-left'
              color={theme.colors.darkGrey}
              size={stylesSectionHeight}
            />
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View
          style={[styles.section, styles.sectionLeft]}
        > 
          <TouchableOpacity
            onPress={this.props.toggleDrawer}
          >
            <Icon
              name='menu'
              color={theme.colors.darkGrey}
              size={stylesSectionHeight}
            />
          </TouchableOpacity>
        </View>
      )
    }
  }

  renderRightSection () {
    return <View style={[styles.section, styles.sectionRight]} />
  }

  renderLogoSection () {
    return (
      <View
        style={styles.section}
      >
        <Image
          source={logo}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
    )
  }

  render () {
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.sections}
        >
          {this.renderLeftSection()}
          {this.renderLogoSection()}
          {this.renderRightSection()}
        </View>
      </View>
    )
  }
}

NavigatorHeaderView.propTypes = {
  goBack: PropTypes.func,
  toggleDrawer: PropTypes.func,
  currentViewIndex: PropTypes.number
}

export default NavigatorHeaderView
