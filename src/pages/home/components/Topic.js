import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends PureComponent {
  render() {
    const topicList = this.props.topicList.toJS()
    return (
      <TopicWrapper>
        {topicList.map(item => {
          return (
            <TopicItem key={item.id}>
              <img className="topic-pic" src={item.imgUrl}/>
              <span className="topic-content">{item.title}</span>
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

export default Topic
