import React, { PureComponent } from "react";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";

class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(!isLogin) {
      return (
        <div>写文章</div>
      );
    }else {
      return <Redirect to='/login' />
    }

  }
}
const mapState = state => ({
  isLogin: state.getIn(["Login", "isLogin"])
});
const mapDispatch = dispatch => ({

});
export default connect(
  mapState,
  mapDispatch
)(Write);
