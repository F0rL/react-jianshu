import * as constants from './constants'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    const isFocus = !state.focused
    return {
      focused: isFocus
    }
  }
  return state
}