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
        fetchedAllSupressedByLocation: undefined,
        locationAllSupressed: action.location
      }
    case types.ERROR_FETCHING_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        errorFetchAllSupressedByLocation: action.error,
        fetchingAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: undefined,
        locationAllSupressed: action.location
      }
    case types.FETCHED_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        fetchingAllSupressedByLocation: false,
        errorFetchAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: action.response,
        locationAllSupressed: action.location,
      }
    case types.CLEAR_ALL_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        fetchingAllSupressedByLocation: false,
        errorFetchAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: undefined,
        locationAllSupressed: undefined
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
      case types.FETCHING_LAST_BOAT_SUPPRESSED:
      return {
        ...state,
        errorFetchLastBoatSuppressed: false,
        fetchingLastBoatSuppressed: true,
        fetchedLastBoatSuppressed: undefined
      }
    case types.ERROR_FETCHING_LAST_BOAT_SUPPRESSED:
      return {
        ...state,
        errorFetchLastBoatSuppressed: action.error,
        fetchingLastBoatSuppressed: false,
        fetchedLastBoatSuppressed: undefined
      }
    case types.FETCHED_LAST_BOAT_SUPPRESSED:
      return {
        ...state,
        errorFetchLastBoatSuppressed: false,
        fetchingLastBoatSuppressed: false,
        fetchedLastBoatSuppressed: action.response
      }
    /* === */
    case types.FETCHING_ALL_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        errorFetchAllBoatSupressedByLocation: false,
        fetchingAllBoatSupressedByLocation: true,
        fetchedAllBoatSupressedByLocation: undefined,
        locationAllBoatSupressed: action.location
      }
    case types.ERROR_FETCHING_ALL_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        errorFetchAllSupressedByLocation: action.error,
        fetchingAllSupressedByLocation: false,
        fetchedAllSupressedByLocation: undefined,
        locationAllSupressed: action.location
      }
    case types.FETCHED_ALL_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        fetchingAllBoatSupressedByLocation: false,
        errorFetchAllBoatSupressedByLocation: false,
        fetchedAllBoatSupressedByLocation: action.response,
        locationAllBoatSupressed: action.location,
      }
    case types.CLEAR_ALL_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        fetchingAllBoatSupressedByLocation: false,
        errorFetchAllBoatSupressedByLocation: false,
        fetchedAllBoatSupressedByLocation: undefined,
        locationAllBoatSupressed: undefined
      }
    /* === */
    case types.FETCHING_LAST_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastBoatSuppressedIn${action.location}`]: false,
        [`fetchingLastBoatSuppressedIn${action.location}`]: true,
        [`fetchedLastBoatSuppressedIn${action.location}`]: undefined
      }
    case types.ERROR_FETCHING_LAST_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastBoatSuppressedIn${action.location}`]: action.error,
        [`fetchingLastBoatSuppressedIn${action.location}`]: false,
        [`fetchedLastBoatSuppressedIn${action.location}`]: undefined
      }
    case types.FETCHED_LAST_BOAT_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastBoatSuppressedIn${action.location}`]: false,
        [`fetchingLastBoatSuppressedIn${action.location}`]: false,
        [`fetchedLastBoatSuppressedIn${action.location}`]: action.response
      }
    /* === */
    case types.FETCHING_LAST_BOAT_WEEKS_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastBoatWeeksSuppressedIn${action.location}`]: false,
        [`fetchingLastBoatWeeksSuppressedIn${action.location}`]: true,
        [`fetchedLastBoatWeeksSuppressedIn${action.location}`]: undefined
      }
    case types.ERROR_FETCHING_LAST_BOAT_WEEKS_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastBoatWeeksSuppressedIn${action.location}`]: action.error,
        [`fetchingLastBoatWeeksSuppressedIn${action.location}`]: false,
        [`fetchedLastBoatWeeksSuppressedIn${action.location}`]: undefined
      }
    case types.FETCHED_LAST_BOAT_WEEKS_SUPPRESSED_BY_LOCATION:
      return {
        ...state,
        [`errorFetchLastBoatWeeksSuppressedIn${action.location}`]: false,
        [`fetchingLastBoatWeeksSuppressedIn${action.location}`]: false,
        [`fetchedLastBoatWeeksSuppressedIn${action.location}`]: action.response
      }
    default:
      return state
  }
}