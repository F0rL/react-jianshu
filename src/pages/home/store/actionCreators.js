import * as constants from "./constants";
import axios from "axios";
// import { fromJS } from "immutable";

//转换数组为immutable数组
// const changeList = data => ({
//   type: constants.GET_TOPIC_LIST,
//   data: fromJS(data)
// });
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA, 
  topicList: result.topicList, 
  articleList: result.articleList, 
  recommendList: result.recommendList,
});

export const getHomeData = () => {
  return dispatch => {
    axios.get("api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeData(result)
      dispatch(action);
    });
  };
};
