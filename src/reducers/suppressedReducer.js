import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function suppressedReducer(state = initialState.suppressedReducer, action) {
  switch (action.type) {
    case types.FETCHING_LAST_SUPPRESSED:
      return {
        ...state,
        errorFetchLastSuppressed: false,
        fetchingLastSuppressed: true,
        fetchedLastSuppressed: undefined
      }
    case types.ERROR_FETCHING_LAST_SUPPRESSED:
      return {
        ...state,
        errorFetchLastSuppressed: action.error,
        fetchingLastSuppressed: false,
        fetchedLastSuppressed: undefined
      }
    case types.FETCHED_LAST_SUPPRESSED:
      return {
        ...state,
        errorFetchLastSuppressed: false,
        fetchingLastSuppressed: false,
        fetchedLastSuppressed: action.response
      }
    /* === */
    case types.FETCHING_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        errorFetchAllSupressedByLocation: false,
        fetchingAllSupressedByLocation: true,
        fetchedAllSupressedByLocation: undefined
      }
    case types.ERROR_FETCHING_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        errorFetchAllSupressedByLocation: action.error,
        fetchingAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: undefined
      }
    case types.FETCHED_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        fetchingAllSupressedByLocation: false,
        errorFetchAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: action.response
      }
    case types.CLEAR_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        fetchingAllSupressedByLocation: false,
        errorFetchAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: undefined
      }
    /* === */
    case types.FETCHING_LAST_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastSuppressedIn${action.location}`]: false,
        [`fetchingLastSuppressedIn${action.location}`]: true,
        [`fetchedLastSuppressedIn${action.location}`]: undefined
      }
    case types.ERROR_FETCHING_LAST_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastSuppressedIn${action.location}`]: action.error,
        [`fetchingLastSuppressedIn${action.location}`]: false,
        [`fetchedLastSuppressedIn${action.location}`]: undefined
      }
    case types.FETCHED_LAST_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastSuppressedIn${action.location}`]: false,
        [`fetchingLastSuppressedIn${action.location}`]: false,
        [`fetchedLastSuppressedIn${action.location}`]: action.response
      }
    /* === */
    case types.FETCHING_LAST_WEEKS_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastWeeksSuppressedIn${action.location}`]: false,
        [`fetchingLastWeeksSuppressedIn${action.location}`]: true,
        [`fetchedLastWeeksSuppressedIn${action.location}`]: undefined
      }
    case types.ERROR_FETCHING_LAST_WEEKS_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastWeeksSuppressedIn${action.location}`]: action.error,
        [`fetchingLastWeeksSuppressedIn${action.location}`]: false,
        [`fetchedLastWeeksSuppressedIn${action.location}`]: undefined
      }
    case types.FETCHED_LAST_WEEKS_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastWeeksSuppressedIn${action.location}`]: false,
        [`fetchingLastWeeksSuppressedIn${action.location}`]: false,
        [`fetchedLastWeeksSuppressedIn${action.location}`]: action.response
      }
    default:
      return state
  }
}