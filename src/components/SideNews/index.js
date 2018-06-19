import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { SingleSide } from "./SingleSide";
import { Error } from "./../Error";
import { getNewsFrom } from "../../store/actionCreators";
import { API_KEY } from "../../common/constants";

class SideNews extends Component {
  state = {
    sideNews: [],
    error: false
  };

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.source.type}?${
      this.props.source.query
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
const mapStateToProps = (state) => ({
  sideNews: state.sideNews
});

const mapDispatchToProps = (dispatch) => ({
  getNewsFrom: (source) => dispatch(getNewsFrom(source))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNews);
