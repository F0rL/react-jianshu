import styled from "styled-components";
import logoPng from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 57px;
  min-width: 1100px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 100%;
  background: url(${logoPng});
  background-size: contain;
`;
export const Nav = styled.div`
  height: 100%;
  padding: 0 15px;
  margin: 0 220px;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    font-weight: 400;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 0px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    bottom: 5px;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 250px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  line-height: 38px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
