import * as types from './actionTypes'
import contentApi from '../api/contentApi'

export function fetchingLastSuppressed() {
  return {
    type: types.FETCHING_LAST_SUPPRESSED
  }
}

export function errorFetchingLastSuppressed(error) {
  return {
    type: types.ERROR_FETCHING_LAST_SUPPRESSED,
    error
  }
}

export function fetchedLastSuppressed(response) {
  return {
    type: types.FETCHED_LAST_SUPPRESSED,
    response
  }
}

export function getLastSuppressed() {
  return dispatch => {
    dispatch(fetchingLastSuppressed())
    return contentApi.lastSuppressed().then(response => {
      dispatch(fetchedLastSuppressed(response))
    }).catch(error => {
      dispatch(errorFetchingLastSuppressed(error))
      throw (error)
    })
  }
}

/** ------------------------------------- */

export function fetchingLastSuppressedByLocation(location) {
  return {
    type: types.FETCHING_LAST_SUPPRESSED_BY_LOCATION,
    location
  }
}

export function errorFetchingLastSuppressedByLocation(error, location) {
  return {
    type: types.ERROR_FETCHING_LAST_SUPPRESSED_BY_LOCATION,
    error,
    location
  }
}

export function fetchedLastSuppressedByLocation(response, location) {
  return {
    type: types.FETCHED_LAST_SUPPRESSED_BY_LOCATION,
    location,
    response
  }
}

export function getLastSuppressedByLocation(location) {
  return dispatch => {
    dispatch(fetchingLastSuppressedByLocation(location))
    return contentApi.lastSuppressedByLocation(location).then(response => {
      dispatch(fetchedLastSuppressedByLocation(response, location))
    }).catch(error => {
      dispatch(errorFetchingLastSuppressedByLocation(error, location))
      throw (error)
    })
  }
}