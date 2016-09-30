import React from 'react'
import { Route } from 'react-router'

import App from './components/app'
import LogIn from './components/log_in'

export default (
  <Route path="/" component={App} >
    <Route path="/login" component={LogIn} />
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.getItem('jwt')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
