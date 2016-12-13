import React from 'react'

export const Login = ({ login }) => (

  <div className="landing">
    <div className="center_div">
        <form onSubmit={evt => {
          evt.preventDefault()
          login(evt.target.username.value, evt.target.password.value)
        } }>
          <input name="username" />
          <br/> 
          <input name="password" type="password" />
          <br/>
          <input type="submit" value="Login" />
        </form>
    </div>
  </div>
)

//--------------------- LOGIN CONTAINER -------------------//
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import store from '../store'


const mapDispatchToProps= function (dispatch) {
  return {
      login: function(username, password){
        return dispatch(login(username, password))
      }, 
      newState: function(){
        return store.getState()
      }
    }
  };

export default connect(
     null,
     mapDispatchToProps)
(Login)
