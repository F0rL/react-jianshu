import React, { PureComponent } from "react";
import { ListItem, ListWrapper, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import {Link} from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList,  articlePage} = this.props;
    return (
      <ListWrapper>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <div className="content">
                <Link to="/detail">{item.get("title")}</Link>
                <p className="abstract">{item.get("desc")}</p>
              </div>
              <a className="imgWrapper" href="/">
                <img src={item.get("imgUrl")} alt="" />
              </a>
            </ListItem>
          );
        })}
        <LoadMore onClick={()=>getMoreList(articlePage)}>获取更多</LoadMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(["Home", "articleList"]),
    articlePage: state.getIn(["Home", "articlePage"])
  };
};

const mapDispatch = dispatch => {
  return {
    getMoreList(articlePage) {
      dispatch(actionCreators.getMoreList(articlePage));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatch
)(List);
