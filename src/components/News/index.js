import React, { Component } from "react";

import { NewSingle } from "./NewSingle";
import { Error } from "./../Error";
import { API_KEY } from "../../constants";

export class News extends Component {
  state = {
    news: [],
    error: false
  };

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          news: data.articles
        })
      )
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
