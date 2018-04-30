import React, { Component } from 'react'
import HomeView from './HomeView'

class HomeContainer extends Component {
  constructor (props) {
    super(props)

    this.goToDev = this.goToDev.bind(this)
  }

  // Actions:
  // ///////////////////////////////////////////////////////////////////////////////

  goToDev () {
    this.props.navigation.navigate('DevView')
  }

  // Render:
  // ///////////////////////////////////////////////////////////////////////////////

  render () {
    return (
      <HomeView
        goToDev={this.goToDev}
      />
    )
  }
}

export default HomeContainer
