import React, { Component} from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl="https://s2.ax1x.com/2019/09/01/npDWEn.png"/>
        <RecommendItem imgUrl="https://s2.ax1x.com/2019/09/01/npD5CV.png"/>
        <RecommendItem imgUrl="https://s2.ax1x.com/2019/09/01/npDh40.png"/>
        <RecommendItem imgUrl="https://s2.ax1x.com/2019/09/01/npDfNq.png"/>
      </RecommendWrapper>
    )
  }
}

export default Recommend