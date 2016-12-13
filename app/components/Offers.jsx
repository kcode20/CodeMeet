import React from 'react'
import {getOffers} from 'APP/app/reducers/offers';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export const Offers = ({ offers }) => {
  return (
  <div className="container">
    <div id="fh5co-project">
    <div className="container-fluid proj-bottom">
      <div className="row">
        {offers && offers.map( offer => {
          return (
            <div key={offer.id} className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
              <Link to={offer.urlTitle}><img src="/images/project-1.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive"/>
                <h3>{ offer.title }</h3>
                <span>{ offer.content }</span>
              </Link>
            </div>
          );
        })
      }
      </div>
    </div>
    <h5> Don't see a Offer You Want? Make a <Link to="/request"> Request </Link></h5>
  </div>
</div>
)
}


const mapStateToProps = (state, ownProps) => {
  return {
    offers: state.offers
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
      getOffers: function(){
        return dispatch(getOffers())
      }
  }
}

export default connect(
     mapStateToProps,
     mapDispatchToProps)(Offers)

