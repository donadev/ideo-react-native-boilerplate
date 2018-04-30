import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DrawerContentView from './DrawerContentView'

// Take data from store.
const mapStateToProps = (state) => ({})

// Take actions.
const mapDispatchToProps = (dispatch) => ({})

class DrawerContentContainer extends Component {
  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <DrawerContentView />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContentContainer)
