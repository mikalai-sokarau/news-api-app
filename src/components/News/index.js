import React, { Component } from "react";
import { connect } from "react-redux";

import { NewSingle } from "./NewSingle";
import { Error } from "./../Error";
import {
  getNewsFrom,
  addNewsToFavorite,
  removeNewsFromFavorite
} from "../../store/actionCreators";
import { API_KEY } from "../../common/constants";

class News extends Component {
  state = {
    news: [],
    error: false,
    newsSource: "BBC"
  };

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.source.type}?${
      this.props.source.query
      }&apiKey=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.props.addNewsToFavorite(data.articles[0], data.articles[0].url);
        this.setState({
          news: data.articles
        });
      })
      .catch(() =>
        this.setState({
          error: true
        })
      );
  }

  renderItems() {
    return !this.state.error ? (
      this.state.news.map(item => <NewSingle key={item.url} item={item} />)
    ) : (
        <Error />
      );
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch => ({
  getNewsFrom: source => dispatch(getNewsFrom(source)),
  addNewsToFavorite: (data, id) => dispatch(addNewsToFavorite(data, id)),
  removeNewsFromFavorite: id => dispatch(removeNewsFromFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
