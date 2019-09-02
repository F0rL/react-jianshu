import React, { PureComponent } from "react";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import { LoginWrapper, Main, Input, Button } from "./style";
import { actionCreators } from "../login/store";

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(!isLogin) {
      return (
        <LoginWrapper>
          <Main>
            <p>登录</p>
            <Input placeholder="账号" ref={input => (this.account = input)} />
            <Input
              placeholder="密码"
              type="password"
              ref={input => (this.password = input)}
            />
            <Button onClick={() => this.props.login(this.account, this.password)}>
              登录
            </Button>
          </Main>
        </LoginWrapper>
      );
    }else {
      return <Redirect to='/' />
    }

  }
}
const mapState = state => ({
  isLogin: state.getIn(["Login", "isLogin"])
});
const mapDispatch = dispatch => ({
  login(accountElement, passwordElement) {
    dispatch(actionCreators.login(accountElement.value, passwordElement.value));
  }
});
export default connect(
  mapState,
  mapDispatch
)(Login);
