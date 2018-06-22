import React, { PureComponent } from "react";
import { connect } from "react-redux";
import SingleSide from "../../components/SingleSide";
import { getNewsFrom } from "../../store/reducers";
import { ASIDE_NEWS_SOURCES } from "../../common/constants";

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

  render = () => <div>{this.renderNewsArticles()}</div>;
}

export default connect(
  store => ({ sideNews: store.sideNews }),
  dispatch => ({ getNewsFrom: options => dispatch(getNewsFrom(options)) })
)(SideNews);
