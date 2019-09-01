import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  flex: 1;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const TopicItem = styled.div`
  height: 32px;
  width: 120px;
  margin-top: 6px;
  line-height: 32px;
  font-size: 0px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  flex-flow: 0;
  cursor: pointer;
  .topic-pic {
    height: 100%;
    vertical-align: top;
  }
  .topic-content {
    font-size: 14px;
    padding: 0 10px;
  }
`;
export const ListWrapper = styled.div`

`;
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .content {
    width: 460px;
    a {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #000;
      text-decoration: none;
    }
    .abstract {
      position:relative;
      font-size: 13px;
      line-height: 2em;
      height: 4em;
      color: #999;
      overflow:hidden;
    }
  }
  .imgWrapper {
    font-size: 0px;
    border: 1px solid #ccc;
    img {
      width: 150px;
      height: 100px;
    }
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
`;
export const ListInfo = styled.div``;
export const HomeRight = styled.div`
  width: 280px;
  padding: 30px 0 0 0;
  margin-left: 40px;
`;
export const RecommendWrapper = styled.div`
  margin-top: -4px;
`;
export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  background-image: url(${props => props.imgUrl});
  background-size: contain;
`;
