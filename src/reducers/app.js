import constants from '../actions/constants'

const initialState = {
  initialized: false,
  transitions: true,
  counter: 0,
  data: null,
  last: null,
  cascais: null,
  oeste: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INIT_APP:
      return {
        ...state,
        initialized: true,
      }

    case constants.RESET_APP:
      return {
        ...initialState,
        transitions: false,
      }

    case constants.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case constants.TOGGLE_TRANSITIONS:
      return {
        ...state,
        transitions: !state.transitions,
      }

    case constants.LOAD_DATA:
      return {
        ...state,
        data: action.data,
      }

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
