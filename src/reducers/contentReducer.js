import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function contentReducer(state = initialState.contentReducer, action) {
  switch (action.type) {
    case types.FETCHING_CONTENT:
      return {
        ...state,
        errorFetchContent: false,
        fetchingContent: true,
        fetchedContent: undefined
      }
    case types.ERROR_FETCHING_CONTENT:
      return {
        ...state,
        errorFetchContent: action.error,
        fetchingContent: false,
        fetchedContent: undefined
      }
    case types.FETCHED_CONTENT:
      return {
        ...state,
        errorFetchContent: false,
        fetchingContent: false,
        fetchedContent: action.response
      }
    default:
      return state
  }
}