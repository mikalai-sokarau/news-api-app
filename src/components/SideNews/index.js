import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { SingleSide } from "./SingleSide";
import { Error } from "./../Error";
import { getNewsFrom } from "../../store/actionCreators";
import { NEWS_SOURCES, ASIDE_NEWS_SOURCES } from "../../common/constants";

class SideNews extends Component {
  state = {
    error: false,
    activeNews: ASIDE_NEWS_SOURCES
  };

  componentDidMount() {
    const options = {
      consumer: this.constructor.name,
      source: this.state.activeNews
    }
    this.props.getNewsFrom(options);
  }

  renderNewsArticles() {
    return !this.state.error ? (
      this.props.sideNews.map(item => <SingleSide key={item.url} item={item} />)
    ) : (
        <Error />
      );
  }

  renderNewsSources() {
    return NEWS_SOURCES.map(item => (
      <a
        href="#!"
        key={item.name}
        className="collection-item"
        // onClick={this.props.getNewsFrom}
      >{item.name}</a>)
    );
  }

  render() {
    return (
      <Fragment>
        <div className="collection">{this.renderNewsSources()}</div>
        <div className="row">{this.renderNewsArticles()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  sideNews: store.sideNews
});

const mapDispatchToProps = dispatch => ({
  getNewsFrom: options => dispatch(getNewsFrom(options))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNews);
