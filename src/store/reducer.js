import { combineReducers } from "redux-immutable";
import { reducer as HeaderReducer } from "../common/header/store";
import { reducer as HomeReducer } from "../pages/home/store";
import { reducer as DetailReducer } from "../pages/detail/store";

export default combineReducers({
  HeaderReducer,
  Home: HomeReducer,
  Detail: DetailReducer
});
