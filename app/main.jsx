'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './components/App'
import Signup from './components/Signup'
import Offers from './components/Offers'
import Home from './components/Home'

import {getOffers} from './reducers/offers'

function onOffersEnter () {
  store.dispatch(getOffers());
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/login"/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/offers" onEnter={onOffersEnter} component={Offers} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

// <Route path="/home" component={Home} />
