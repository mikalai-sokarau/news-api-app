import React, { Component } from "react";
import axios from "axios";

import { SingleSide } from "./SingleSide";
import { Error } from "./../Error";
import { API_KEY } from "../../constants";

export class SideNews extends Component {
  state = {
    sideNews: [],
    error: false
  };

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=${API_KEY}`;

    axios
      .get(url)
      .then(res =>
        this.setState({
          sideNews: res.data.articles
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
      this.state.sideNews.map(item => <SingleSide key={item.url} item={item} />)
    ) : (
      <Error />
    );
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}
