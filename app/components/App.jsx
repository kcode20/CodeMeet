import React from 'react';
import NavBar from './NavBar';
import WhoAmI from './WhoAmI';
import Login from './Login';


export const App=({ user, children }) => (
    <div>
      <NavBar/>
      {children}
    </div>
    )

import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth })
)(App) 