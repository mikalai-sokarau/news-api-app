import React, { Component } from "react";
import { connect } from "react-redux";
import { NewSingle } from "./NewSingle";
import { Error } from "./../Error";
import { getNewsFrom } from "../../store/actionCreators";

class News extends Component {
  state = {
    error: false,
  };

  componentDidMount() {
    const options = {
      consumer: this.constructor.name,
      source: this.props.source
    }
    this.props.getNewsFrom(options);
  }

  renderItems() {
    return !this.state.error ? (
      this.props.news.map(item => <NewSingle key={item.url} item={item} />)
    ) : (
        <Error />
      );
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
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
