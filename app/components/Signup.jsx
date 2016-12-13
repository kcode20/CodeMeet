import React from 'react'

export const Signup = ({ login }) => (

  <div className="landing">
    <div className="center_div">
        <form onSubmit={evt => {
          evt.preventDefault()
          signup(evt.target.username.value, evt.target.password.value)
          console.log("submitted");
        } }>
          <input name="name" />
          <br/>
          <input name="username" />
          <br/> 
          <input name="password" type="password" />
          <br/>
          <input type="submit" value="Signup" />
        </form>
    </div>
  </div>
)

//--------------------- LOGIN CONTAINER -------------------//
import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import store from '../store'


const mapDispatchToProps= function (dispatch) {
  return {
      signup: function(username, password){
        console.log("signup function called")
        return dispatch(signup(username, password))
      }, 
      newState: function(){
        return store.getState()
      }
    }
  };

export default connect(
     null,
     mapDispatchToProps)
(Signup)