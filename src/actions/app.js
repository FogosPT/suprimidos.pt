/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import axios from 'axios'
import constants from './constants'

export const initApp = () => (dispatch, getState) => {
  dispatch({ type: constants.INIT_APP })
}

export const incrementCounter = () => (dispatch, getState) => {
  dispatch({ type: constants.INCREMENT_COUNTER })
}

export const toggleTransitions = () => (dispatch, getState) => {
  dispatch({ type: constants.TOGGLE_TRANSITIONS })
}

export const loadData = () => async (dispatch, getState) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/posts/1`)
  dispatch({ type: constants.LOAD_DATA, data })
}

export const resetApp = () => async (dispatch, getState) => {
  dispatch({ type: constants.RESET_APP })
  await dispatch(push('/'))
  dispatch({ type: constants.TOGGLE_TRANSITIONS })
}

export const getLast = () => async (dispatch, getState) => {
  const { data } = await axios.get(`https://tomahock.com/cenas/suprimidos/data.php?last=1`)
  dispatch({ type: constants.LAST_DATA, data })
}

export const getCascais = () => async (dispatch, getState) => {
  const { data } = await axios.get(`https://tomahock.com/cenas/suprimidos/data.php?oeste=1`)
  dispatch({ type: constants.CASCAIS_DATA, data })
}

export const getOeste = () => async (dispatch, getState) => {
  console.log(1)
  const { data } = await axios.get(`https://tomahock.com/cenas/suprimidos/data.php?oeste=1`)
  dispatch({ type: constants.OESTE_DATA, data })
}

