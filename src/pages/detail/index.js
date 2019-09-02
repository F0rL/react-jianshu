import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../detail/store";

import {
  DetailWrapper,
  Container,
  Main,
  Aside,
  Header,
  Mark,
  Content
} from "./style";

class Detail extends Component {
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
  render() {
    return (
      <DetailWrapper>
        <Container>
          <Main>
            <Header>{this.props.title}</Header>
            <Mark>
              <span>时间 2016.05.08 18:38:27</span>
              <span>字数 4388</span>
              <span>阅读 32845</span>
            </Mark>
            <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
          </Main>
          <Aside>aside</Aside>
        </Container>
      </DetailWrapper>
    );
  }
}
const mapState = state => ({
  title: state.getIn(["Detail", "title"]),
  content: state.getIn(["Detail", "content"])
});
const mapDispatch = dispatch => ({
  getDetailData(id) {
    dispatch(actionCreators.getDetailData(id));
  }
});
export default connect(
  mapState,
  mapDispatch
)(Detail);
