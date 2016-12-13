import React from 'react';
import {Link} from 'react-router';

export const Navbar = ({user, logout})=> (
      <nav className="fh5co-nav" role="navigation">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-right">
                <p className="num">Call: +01 123 456 7890</p>
                <ul className="fh5co-social">
                  <li><a href="#"><i className="icon-twitter"></i></a></li>
                  <li><a href="#"><i className="icon-dribbble"></i></a></li>
                  <li><a href="#"><i className="icon-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-1">
                <div id="fh5co-logo"><a href="index.html">Learn<span>.</span></a></div>
              </div>
              <div className="col-xs-11 text-right menu-1">
                <ul>
                  <li className="active"><a href="index.html">Home</a></li>
                  {user && <li><Link to="/offers">Offers</Link></li>}
                  <li><a href="courses.html">About Us</a></li>
                  <li><a href="contact.html">Contact</a></li>
                   {user? <li><a onClick={()=> logout()} href="#">Logout</a></li>
                                  :<span>
                                  <li><span><Link to='/login'>Login</Link></span></li>
                                  <li><span><Link to="/signup"> Sign Up </Link></span></li>
                                  </span>
                                }
                  
                  <li className="btn-cta"><a href="#"><span>Create a Course</span></a></li>
                </ul>
              </div>
            </div>
            
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