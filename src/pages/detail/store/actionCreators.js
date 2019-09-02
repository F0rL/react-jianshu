import * as constants from "./constants";
import axios from "axios";

const changeDetail = (title, content) => ({
  type: constants.GET_DETAIL,
  title,
  content
})

export const getDetailData = () => {
  return (dispatch) => {
    axios
      .get("api/detail.json")
      .then(res => {
        const result = res.data.data
       dispatch(changeDetail(result.title, result.content))
      })
      .catch(error => {
        console.log(error);
      });
  };
};
