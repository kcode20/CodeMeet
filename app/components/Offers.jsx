import React from 'react'

export const Offers = ({ getOffers }) => (

  <div className="container">
    <div id="fh5co-project">
    <div className="container-fluid proj-bottom">
      <div className="row">
        <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
          <a href="#"><img src="public/images/project-1.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
            <h3>Web Master</h3>
            <span>View Course</span>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
          <a href="#"><img src="images/project-2.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
            <h3>Virtual Assistant</h3>
            <span>View Course</span>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
          <a href="#"><img src="images/project-3.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
            <h3>Read Bible</h3>
            <span>View Course</span>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
          <a href="#"><img src="images/project-9.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
            <h3>Programming</h3>
            <span>View Course</span>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
          <a href="#"><img src="images/project-5.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
            <h3>Technician</h3>
            <span>View Course</span>
          </a>
        </div>
        <div className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
          <a href="#"><img src="images/project-6.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
            <h3>Photography</h3>
            <span>View Course</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

//--------------------- OFFERS CONTAINER -------------------//
import {getOffers} from 'APP/app/reducers/offers'
import {connect} from 'react-redux'


const mapDispatchToProps= function (dispatch) {
  return {
      getOffers: function(){
        return dispatch(getOffers())
      }
  }
}

export default connect(
     null,
     mapDispatchToProps)
(Offers)