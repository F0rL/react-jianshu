import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

//转换数组为immutable数组
const changeList = (data) => ({
  type: constants.GET_LIST,
  data: fromJS(data)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
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