import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NewSingle from "../../components/NewSingle";
import { getNewsFrom } from "../../store/reducers";
import { NEWS_SOURCES } from "../../common/constants";
import Error from "./../../components/Error/index";

const DEFAULT_NEWS = NEWS_SOURCES[0];

class News extends PureComponent {
  componentDidMount() {
    this.getNews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.source !== prevProps.source) {
      this.getNews();
    }
  }

  getNews = () => {
    const options = {
      consumer: this.constructor.name,
      source:
        NEWS_SOURCES.find(item => item.shortName === this.props.source) ||
        DEFAULT_NEWS
    };

    this.props.getNewsFrom(options);
  };

  renderNews = () =>
    this.props.news.map(item => <NewSingle key={item.url} item={item} />);

  render = () => (
    <div className="col s8">
      <Error>
        <div className="row">{this.renderNews()}</div>
      </Error>
    </div>
  );
}

export default connect(
  store => ({ news: store.news }),
  dispatch => ({ getNewsFrom: options => dispatch(getNewsFrom(options)) })
)(News);
