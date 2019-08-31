import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

//转换数组为immutable数组
const changeList = (data) => ({
  type: constants.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length /10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const pageChange = (currentPage) => ({
  type: constants.PAGE_CHANGE,
  currentPage
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('internet error')
    })
  }
}

