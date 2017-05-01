import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Html from './components/Html'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

export default (
  <Router history={browserHistory}>
    <Route component={Html}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/*" component={NotFound} />
      </Route>
    </Route>
  </Router>
)
