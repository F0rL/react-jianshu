import React, { PureComponent } from "react";
//import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { connect } from "react-redux";
import { actionCreators } from './store'
import {BackTop} from './style'

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvent()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  handleScrollTop() {
    window.scrollTo(0,0)
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
        </HomeRight>
        {this.props.showScrollToTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    showScrollToTop: state.getIn(["Home","showScrollToTop"])
  }
}
const mapDispatchToProps = dispatch => ({
  changeHomeData(){
    const action = actionCreators.getHomeData()
    dispatch(action)
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
