import React, { Component } from "react";
import { connect } from "react-redux";
import { NewSingle } from "./NewSingle";
import { Error } from "./../Error";
import { getNewsFrom } from "../../store/actionCreators";
import { NEWS_SOURCES } from "../../common/constants";

class News extends Component {
  state = {
    error: false,
    activeNews: NEWS_SOURCES[3]
  };

  componentDidMount() {
    const options = {
      consumer: this.constructor.name,
      source: this.state.activeNews
    }
    this.props.getNewsFrom(options);
  }

  renderNews() {
    return !this.state.error ? (
      this.props.news.map(item => <NewSingle key={item.url} item={item} />)
    ) : (
        <Error />
      );
  }

  render() {
    return <div className="row">{this.renderNews()}</div>;
  }
}

const mapStateToProps = store => ({
  news: store.news
});

const mapDispatchToProps = dispatch => ({
  getNewsFrom: options => dispatch(getNewsFrom(options)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
