import axios from 'axios'
import constants from './constants'

export const getLast = () => async (dispatch) => {
  const { data } = await axios.get('https://tomahock.com/cenas/suprimidos/data.php?last=1')
  dispatch({ type: constants.LAST_DATA, data })
}

export const getCascais = () => async (dispatch) => {
  const { data } = await axios.get('https://tomahock.com/cenas/suprimidos/data.php?oeste=1')
  dispatch({ type: constants.CASCAIS_DATA, data })
}

export const getOeste = () => async (dispatch) => {
  const { data } = await axios.get('https://tomahock.com/cenas/suprimidos/data.php?oeste=1')
  dispatch({ type: constants.OESTE_DATA, data })
}

