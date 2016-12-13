import React from 'react';
import {Link} from 'react-router';

export const Navbar = ({user, logout})=> (

<nav className="navbar navbar-default">
  <div className="container-fluid">
    
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">CodeMeet</a>
    </div>

    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><a href='#'>{user?  <li><a onClick={()=> logout().then(()=> browserHistory.push('/login'))} href="#">Logout</a></li>
                        : <span><Link to='/login'>Login |</Link><Link to="/signup"> Sign Up </Link></span> }</a></li>

      </ul>
    </div>
  </div>
</nav>

)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapStateToProps= function(state){
	return{
		user: state.auth,
	};
};

export default connect (
  mapStateToProps,
  {logout},
) (Navbar)