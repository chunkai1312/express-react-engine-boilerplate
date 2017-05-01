import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src="/img/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="/">Home</Link>
          {' '}
          <Link to="/about">About</Link>
        </p>
        {children}
      </div>
    )
  }
}

export default Layout
