import { combineReducers } from 'redux'
import suppressedReducer from './suppressedReducer'
import delayedReducer from './delayedReducer'

const rootReducer = combineReducers({
  suppressedReducer,
  delayedReducer
})

export default rootReducer