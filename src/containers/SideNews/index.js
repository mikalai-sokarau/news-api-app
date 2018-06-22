import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SingleSide from "../../components/SingleSide";
import { getNewsFrom } from "../../store/reducers";
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

SideNews.propTypes = {
  sideNews: PropTypes.arrayOf(PropTypes.object),
  getNewsFrom: PropTypes.func
};

export default connect(
  store => ({ sideNews: store.sideNews }),
  dispatch => ({ getNewsFrom: options => dispatch(getNewsFrom(options)) })
)(SideNews);
