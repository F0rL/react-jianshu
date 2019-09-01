import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

//转换数组为immutable数组
// const changeList = data => ({
//   type: constants.GET_TOPIC_LIST,
//   data: fromJS(data)
// });
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (result, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  articleList: fromJS(result),
  nextPage
});

export const getHomeData = () => {
  return dispatch => {
    axios.get("api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  };
};

export const getMoreList = articlePage => {
  return dispatch => {
    axios.get(`api/homeList.json?page=${articlePage}`).then(res => {
      const result = res.data.data;
      const action = addHomeList(result, articlePage + 1);
      dispatch(action);
    });
  };
};

export const toggleTopShow = show => {
  return { type: constants.TOGGLE_SCROLL_TOP, showScrollToTop: show };
};
