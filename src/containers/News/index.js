import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NewSingle from "../../components/NewSingle";
import { getNewsFrom } from "../../store/actionCreators";
import { NEWS_SOURCES } from "../../common/constants";

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
        NEWS_SOURCES[0]
    };

    this.props.getNewsFrom(options);
  };

  renderNews = () =>
    this.props.news.map(item => <NewSingle key={item.url} item={item} />);

  render = () => (
    <div className="col s8">
      <div className="row">{this.renderNews()}</div>
    </div>
  );
}

export default connect(
  store => ({ news: store.news }),
  dispatch => ({ getNewsFrom: options => dispatch(getNewsFrom(options)) })
)(News);
