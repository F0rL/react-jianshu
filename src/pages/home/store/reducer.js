import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScrollToTop: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};
const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.articleList),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_HOME_LIST:
      return addHomeList(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScrollToTop", action.showScrollToTop);
    default:
      return state;
  }
};
