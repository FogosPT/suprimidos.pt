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

/** ------------------------------------- */

export function fetchingLastWeeksSuppressedByLocation(location) {
  return {
    type: types.FETCHING_LAST_WEEKS_SUPPRESSED_BY_LOCATION,
    location
  }
}

export function errorFetchingLastWeeksSuppressedByLocation(error, location) {
  return {
    type: types.ERROR_FETCHING_LAST_WEEKS_SUPPRESSED_BY_LOCATION,
    error,
    location
  }
}

export function fetchedLastWeeksSuppressedByLocation(response, location) {
  return {
    type: types.FETCHED_LAST_WEEKS_SUPPRESSED_BY_LOCATION,
    location,
    response
  }
}

export function getLastWeeksSuppressedByLocation(location) {
  return dispatch => {
    dispatch(fetchingLastWeeksSuppressedByLocation(location))
    return contentApi.lastSuppressedLastWeeksByLocation(location).then(response => {
      dispatch(fetchedLastWeeksSuppressedByLocation(response, location))
    }).catch(error => {
      dispatch(errorFetchingLastWeeksSuppressedByLocation(error, location))
      throw (error)
    })
  }
}

/** ------------------------------------- */

export function fetchingAllSuppressedByLocation(location) {
  return {
    type: types.FETCHING_ALL_SUPPRESSED_BY_LOCATION,
    location
  }
}

export function errorFetchingAllSuppressedByLocation(error, location) {
  return {
    type: types.ERROR_FETCHING_ALL_SUPPRESSED_BY_LOCATION,
    error,
    location
  }
}

export function fetchedAllSuppressedByLocation(response, location) {
  return {
    type: types.FETCHED_ALL_SUPPRESSED_BY_LOCATION,
    location,
    response
  }
}

export function getAllSuppressedByLocation(location) {
  return dispatch => {
    dispatch(fetchingAllSuppressedByLocation(location))
    return contentApi.allSuppressedByLocation(location).then(response => {
      dispatch(fetchedAllSuppressedByLocation(response, location))
    }).catch(error => {
      dispatch(errorFetchingAllSuppressedByLocation(error, location))
      throw (error)
    })
  }
}

export function clearAllSuppressedByLocation() {
  return {
    type: types.CLEAR_ALL_SUPPRESSED_BY_LOCATION
  }
}

export function cleanAllSupressedByLocation() {
  return dispatch => {
    dispatch(clearAllSuppressedByLocation())
  }
}