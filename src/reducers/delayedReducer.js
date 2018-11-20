import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function delayedReducer(state = initialState.delayedReducer, action) {
  switch (action.type) {
    case types.FETCHING_LAST_DELAYED:
      return {
        ...state,
        errorFetchLastDelayed: false,
        fetchingLastDelayed: true,
        fetchedLastDelayed: undefined
      }
    case types.ERROR_FETCHING_LAST_DELAYED:
      return {
        ...state,
        errorFetchLastDelayed: action.error,
        fetchingLastDelayed: false,
        fetchedLastDelayed: undefined
      }
    case types.FETCHED_LAST_DELAYED:
      return {
        ...state,
        errorFetchLastDelayed: false,
        fetchingLastDelayed: false,
        fetchedLastDelayed: action.response
      }
    /* === */
    case types.FETCHING_LAST_DELAYED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastDelayedIn${action.location}`]: false,
        [`fetchingLastDelayedIn${action.location}`]: true,
        [`fetchedLastDelayedIn${action.location}`]: undefined
      }
    case types.ERROR_FETCHING_LAST_DELAYED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastDelayedIn${action.location}`]: action.error,
        [`fetchingLastDelayedIn${action.location}`]: false,
        [`fetchedLastDelayedIn${action.location}`]: undefined
      }
    case types.FETCHED_LAST_DELAYED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastDelayedIn${action.location}`]: false,
        [`fetchingLastDelayedIn${action.location}`]: false,
        [`fetchedLastDelayedIn${action.location}`]: action.response
      }
    default:
      return state
  }
}