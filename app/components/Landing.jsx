import React from 'react'

export const Landing = () => (
  <div className="landing">
    <div className="center_div">
        <h1> Welcome To CodeMeet! </h1>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Landing)