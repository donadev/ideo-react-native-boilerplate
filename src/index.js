import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Drawer from 'react-native-drawer'
import { DrawerContent } from '@uikit'
import ApplicationNavigation from '@navigation/application'
import store from '@redux/store'
import { openDrawer, closeDrawer } from '@redux/actions/application'
import config from '@config'

// Enable / Disable yellow box warning.
console.disableYellowBox = !config.main.yellowWarning

// Export main app container.
class Application extends Component {
  constructor (props) {
    super(props)

    this.state = {
      drawer: false
    }

    this.onDrawerOpen = this.onDrawerOpen.bind(this)
    this.onDrawerClose = this.onDrawerClose.bind(this)
  }

  componentDidMount () {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ drawer: state.application.isDrawerOpen })
    })
  }

  // Actions:
  // ///////////////////////////////////////////////////////////////////////////////
  
  onDrawerOpen () {
    store.dispatch(openDrawer())
  }

  onDrawerClose () {
    store.dispatch(closeDrawer())
  }

  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <Provider store={store}>
        <Drawer
          content={<DrawerContent />}
          openDrawerOffset={0.2}
          open={this.state.drawer}
          onOpen={this.onDrawerOpen}
          onClose={this.onDrawerClose}
        >
          <ApplicationNavigation />
        </Drawer>
      </Provider>
    )
  }
}


export default Application
