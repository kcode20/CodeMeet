import axios from 'axios'

const reducer = (state=null, action) => {
  switch(action.type) {
  case GETOFFER:
    return action.offers  
  }
  return state
}

const GETOFFER = 'GETOFFER'
export const allOffers = offers => ({
  type: GETOFFER, offers
})

export const getOffers = () =>
  dispatch =>
    axios.get('/api/posts/offers')
      .then( offers => dispatch(allOffers(offers)))
      .catch(console.log.bind(console))    


export default reducer