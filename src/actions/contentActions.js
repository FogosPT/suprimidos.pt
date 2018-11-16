import * as types from './actionTypes'
import contentApi from '../api/contentApi'

export function fetchingContent() {
  return {
    type: types.FETCHING_CONTENT
  }
}

export function errorFetchingContent(error) {
  return {
    type: types.ERROR_FETCHING_CONTENT,
    error
  }
}

export function fetchedContent(response) {
  return {
    type: types.FETCHED_CONTENT,
    response
  }
}

export function getContent() {
  return dispatch => {
    dispatch(fetchingContent())
    return contentApi.fetchContent().then(response => {
      dispatch(fetchedContent(response))
    }).catch(error => {
      dispatch(errorFetchingContent(error))
      throw (error)
    })
  }

}