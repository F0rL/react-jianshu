import React, { Component } from "react";
//import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { connect } from "react-redux";
import { actionCreators } from './store'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
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
      </HomeWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => ({
  changeHomeData(){
    const action = actionCreators.getHomeData()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
