import React, { PureComponent } from "react";
import SingleSide from "../../components/SingleSideNews";
import { ASIDE_NEWS_SOURCES } from "../../common/constants";
import Error from "./../../components/Error/index";

class SideNews extends PureComponent {
  componentDidMount() {
    const options = {
      consumer: this.constructor.name,
      source: ASIDE_NEWS_SOURCES
    };
    this.props.getNewsFrom(options);
  }

  renderNewsArticles = () =>
    this.props.sideNews.map(item => <SingleSide key={item.url} item={item} />);

  render = () => (
    <Error>
      <div>{this.renderNewsArticles()}</div>
    </Error>
  );
}

export default SideNews;
