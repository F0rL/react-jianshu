import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from "./style";

class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      currentPage,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handlePageChange
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() =>
                handlePageChange(currentPage, totalPage, this.spinIcon)
              }
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }
  render() {
    const { focused, handleInputFocus, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={() => handleInputFocus(list)}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe663;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe600;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

// const getListArea = show => {
//   if (show) {
//     return (
//       <SearchInfo>
//         <SearchInfoTitle>
//           热门搜索
//           <SearchInfoSwitch>换一批</SearchInfoSwitch>
//         </SearchInfoTitle>
//         <SearchInfoList>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//           <SearchInfoItem>教育</SearchInfoItem>
//         </SearchInfoList>
//       </SearchInfo>
//     );
//   } else {
//   }
// };

// const Header = props => {
//   return (
//     <HeaderWrapper>
//       <Logo />
//       <Nav>
//         <NavItem className="left active">首页</NavItem>
//         <NavItem className="left">下载App</NavItem>
//         <NavItem className="right">登录</NavItem>
//         <NavItem className="right">
//           <i className="iconfont">&#xe636;</i>
//         </NavItem>
//         <SearchWrapper>
//           <CSSTransition in={props.focused} timeout={300} classNames="slide">
//             <NavSearch
//               className={props.focused ? "focused" : ""}
//               onFocus={props.handleInputFocus}
//               onBlur={props.handleInputFocus}
//             />
//           </CSSTransition>
//           <i className={props.focused ? "focused iconfont" : "iconfont"}>
//             &#xe663;
//           </i>
//           {getListArea(props.focused)}
//         </SearchWrapper>
//       </Nav>
//       <Addition>
//         <Button className="writting">
//           <i className="iconfont">&#xe600;</i>写文章
//         </Button>
//         <Button className="reg">注册</Button>
//       </Addition>
//     </HeaderWrapper>
//   );
// };

const mapStateToProps = state => {
  return {
    focused: state.getIn(["HeaderReducer", "focused"]),
    //上面与下面等价
    //focused: state.get('HeaderReducer').get('focused')
    list: state.getIn(["HeaderReducer", "list"]),
    currentPage: state.getIn(["HeaderReducer", "currentPage"]),
    totalPage: state.getIn(["HeaderReducer", "totalPage"]),
    mouseIn: state.getIn(["HeaderReducer", "mouseIn"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(currentPage, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/\D/g, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      console.log(originAngle);
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
      let newCurrentPage = currentPage === totalPage ? 1 : currentPage + 1;
      dispatch(actionCreators.pageChange(newCurrentPage));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
