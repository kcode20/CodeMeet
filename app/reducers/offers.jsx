import axios from 'axios'

const GETOFFER = 'GETOFFER'

const reducer = (state = [], action) => {
  switch (action.type) {
    case GETOFFER:
      return action.offers
  }
  return state
}

export const allOffers = offers => ({
  type: GETOFFER, offers
})

export const getOffers = () =>
  dispatch =>
    axios.get('/api/posts/offers')
      .then( response => response.data)
      .then( offers => dispatch(allOffers(offers)))
      .catch(console.log.bind(console))


export default reducer
