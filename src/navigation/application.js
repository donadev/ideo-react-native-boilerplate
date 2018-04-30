import React from 'react'
import { StackNavigator } from 'react-navigation'
import config from '@config'
import theme from '@theme'
import { NavigatorHeader } from '@uikit'
import Launch from '@views/Launch/LaunchContainer'
import Home from '@views/Home/HomeContainer'

// Default settings.
const defaultSettings = {
  initialRouteName: 'LaunchView',
  mode: 'card',
  headerMode: 'float',
  navigationOptions: {
    title: config.application.title,
    headerStyle: {
      height: theme.sizes.headerHeight,
      backgroundColor: theme.colors.lightGrey
    },
    headerTitleStyle: {
      color: theme.colors.black
    },
    header: (settings) => (<NavigatorHeader settings={settings} />) // override default header
  }
}

// Launch view.
const LaunchView = {
  screen: Launch,
  navigationOptions: {
    title: 'Launch',
    header: null
  }
}

// Home view.
const HomeView = {
  screen: Home,
  navigationOptions: {
    title: 'Home'
  }
}

export default StackNavigator({
  LaunchView,
  HomeView
}, defaultSettings)
