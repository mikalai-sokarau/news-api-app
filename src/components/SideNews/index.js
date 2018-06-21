import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { SingleSide } from "./SingleSide";
import { getNewsFrom } from "../../store/actionCreators";
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

const mapStateToProps = store => ({
  sideNews: store.sideNews
});

const mapDispatchToProps = dispatch => ({
  getNewsFrom: options => dispatch(getNewsFrom(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNews);
