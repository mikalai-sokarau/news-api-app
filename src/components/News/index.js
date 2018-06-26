import React, { PureComponent } from "react";
import NewSingle from "../../components/NewSingle";
import { NEWS_SOURCES } from "../../common/constants";
import Error from "./../../components/Error/index";

const DEFAULT_NEWS = NEWS_SOURCES[0];

class News extends PureComponent {
  getNews = () => {
    const options = {
      consumer: this.constructor.name,
      source:
        NEWS_SOURCES.find(item => item.shortName === this.props.source) ||
        DEFAULT_NEWS
    };

    this.props.getNewsFrom(options);
  };

  componentDidMount() {
    this.getNews();
  }

  componentDidUpdate(prevProps) {
    if (this.props.source !== prevProps.source) {
      this.getNews();
    }
  }

  renderNews = () =>
    this.props.news.map(item => (
      <NewSingle
        key={item.url}
        item={item}
        checked={this.props.favoriteNewsKeys[item.url]}
        addNewsToFavorite={this.props.addNewsToFavorite}
        removeNewsFromFavorite={this.props.removeNewsFromFavorite}
      />
    ));

  render = () => (
    <div className="col s8">
      <Error>
        <div>{this.renderNews()}</div>
      </Error>
    </div>
  );
}

export default News;
