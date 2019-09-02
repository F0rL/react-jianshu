import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`;
export const Container = styled.div`
  display: flex;
  width: 1032px;
  padding: 10px 16px 0 16px;
  margin: 0 auto;
  align-items:flex-start
`;
export const Main = styled.div`
  width: 730px;
  padding: 24px;
  margin-right: 10px;
  margin-bottom: 24px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
`;
export const Header = styled.h1`
  margin-top: 50px;
  line-height: 44px;
  color: #333;
  font-size: 32px;
  font-weight: 700;
  word-break: break-word;
  margin-bottom: 0.5em;
`;
export const Mark = styled.div`
  margin-bottom: 32px;
  color: #969696;
  font-size: 14px;
  span {
    margin-right: 1em;
  }
`;

export const Content = styled.div`
  img {
    margin: 0 53px 25px 53px;
  }
  p {
    margin-bottom: 20px;
    word-break: break-word;
    font-size: 16px;
    color: #404040;
    line-height: 1.7em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export const Aside = styled.div`
  width: 260px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
`;
