import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    const isFocus = !state.get('focused');
    return state.set('focused', isFocus)
  }
  return state;
};
