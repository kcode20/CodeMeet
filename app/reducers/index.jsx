import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  offers: require('./offers').default, 
})

export default rootReducer
