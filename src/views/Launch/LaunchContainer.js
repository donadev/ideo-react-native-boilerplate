import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LaunchView from './LaunchView'
import { resetTo } from '../../services/reactNavigationHelpers'
import { startLoading, stopLoading } from '../../redux/actions/application'

// Take data from store.
const mapStateToProps = (state) => ({
  application: state.application
})

// Take actions.
const mapDispatchToProps = (dispatch) => ({
  applicationActions: bindActionCreators({ startLoading, stopLoading }, dispatch)
})

class LaunchContainer extends Component {
  componentDidMount () {
    this.loadData()
  }

  // Actions:
  // ///////////////////////////////////////////////////////////////////////////////

  loadData () {
    this.props.applicationActions.startLoading()

    setTimeout(() => {
      this.props.applicationActions.stopLoading()
      this.goToHome()
    }, 500)
  }

  goToHome () {
    resetTo(this.props.navigation, 'HomeView')
  }

  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <LaunchView
        showSpinner={this.props.application.isLoading}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchContainer)
