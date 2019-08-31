import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      const isFocus = !state.get("focused");
      return state.set("focused", isFocus);
    case constants.GET_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
};
