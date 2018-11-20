import * as types from './actionTypes'
import contentApi from '../api/contentApi'

export function fetchingLastDelayed() {
  return {
    type: types.FETCHING_LAST_DELAYED
  }
}

export function errorFetchingLastDelayed(error) {
  return {
    type: types.ERROR_FETCHING_LAST_DELAYED,
    error
  }
}

export function fetchedLastDelayed(response) {
  return {
    type: types.FETCHED_LAST_DELAYED,
    response
  }
}

export function getLastDelayed() {
  return dispatch => {
    dispatch(fetchingLastDelayed())
    return contentApi.lastDelayed().then(response => {
      dispatch(fetchedLastDelayed(response))
    }).catch(error => {
      dispatch(errorFetchingLastDelayed(error))
      throw (error)
    })
  }
}

/** ------------------------------------- */

export function fetchingLastDelayedByLocation(location) {
  return {
    type: types.FETCHING_LAST_DELAYED_BY_LOCATION,
    location
  }
}

export function errorFetchingLastDelayedByLocation(error, location) {
  return {
    type: types.ERROR_FETCHING_LAST_DELAYED_BY_LOCATION,
    error,
    location
  }
}

export function fetchedLastDelayedByLocation(response, location) {
  return {
    type: types.FETCHED_LAST_DELAYED_BY_LOCATION,
    location,
    response
  }
}

export function getLastDelayedByLocation(location) {
  return dispatch => {
    dispatch(fetchingLastDelayedByLocation(location))
    return contentApi.lastDelayedByLocation(location).then(response => {
      dispatch(fetchedLastDelayedByLocation(response, location))
    }).catch(error => {
      dispatch(errorFetchingLastDelayedByLocation(error, location))
      throw (error)
    })
  }
}