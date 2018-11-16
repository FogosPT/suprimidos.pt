import constants from '../actions/constants'

const initialState = {
  last: null,
  cascais: null,
  oeste: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LAST_DATA:
      return {
        ...state,
        last: action.data,
      }

    case constants.CASCAIS_DATA:
      return {
        ...state,
        cascais: action.data.cascais,
      }

    case constants.OESTE_DATA:
      return {
        ...state,
        oeste: action.data.oeste,
      }

    default:
      return state
  }
}
