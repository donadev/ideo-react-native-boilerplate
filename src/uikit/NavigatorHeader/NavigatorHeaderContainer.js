import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleDrawer } from '../../redux/actions/application'
import NavigatorHeaderView from './NavigatorHeaderView'

// Take data from store.
const mapStateToProps = (state) => ({
  application: state.application
})

// Take actions.
const mapDispatchToProps = (dispatch) => ({
  applicationActions: bindActionCreators({ toggleDrawer }, dispatch)
})

class NavigatorHeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  // Actions:
  // ///////////////////////////////////////////////////////////////////////////////

  goBack () {
    this.props.settings.navigation.goBack()
  }

  toggleDrawer () {
    this.props.applicationActions.toggleDrawer()
  }

  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <NavigatorHeaderView
        goBack={this.goBack}
        toggleDrawer={this.toggleDrawer}
        currentViewIndex={this.props.settings.index}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorHeaderContainer)

