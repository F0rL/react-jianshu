import React, { Component } from "react";
import { ListItem, ListWrapper } from "../style";
import { connect } from "react-redux";

class List extends Component {
  render() {
    return (
      <ListWrapper>
        {this.props.list.map((item) => {
          return (<ListItem key={item.get("id")}>
            <div className="content">
             <a href="/">{item.get("title")}</a>
             <p className="abstract">{item.get("desc")}</p>
            </div>
            <a className="imgWrapper" href="/"><img src={item.get("imgUrl")} alt=""/></a>
          </ListItem>);
        })}
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(["Home", "articleList"])
  };
};
export default connect(
  mapStateToProps,
  null
)(List);
