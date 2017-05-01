import React, { Component, PropTypes } from 'react'

class Html extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const { children } = this.props
    return (
      <html>
        <head>
          <title>Express React Engine Boilerplate</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
          <div>
            {children}
          </div>
          <script src="/js/bundle.js" charSet="UTF-8" />
        </body>
      </html>
    )
  }
}

export default Html
