const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    const isFocus = !state.focused
    return {
      focused: isFocus
    }
  }
  return state
}