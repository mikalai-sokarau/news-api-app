import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleNews from '../../components/SingleNews';
import { NEWS_SOURCES } from '../../common/constants';
import * as newsActions from '../../reducers/index';
import Error from '../Error';

const DEFAULT_NEWS = NEWS_SOURCES[0];

class News extends Component {
  getNews = () => {
    const options = {
      consumer: 'news',
      source:
        NEWS_SOURCES.find(item => item.shortName === this.props.source) || DEFAULT_NEWS
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

  render = () => (
    <div className="col s8">
      <Error>
        <div>
          {this.props.news.map(item => (
            <SingleNews
              key={item.url}
              item={item}
              checked={this.props.favoriteNewsKeys[item.url]}
              addNewsToFavorite={this.props.addNewsToFavorite}
              removeNewsFromFavorite={this.props.removeNewsFromFavorite}
            />
          ))}
        </div>
      </Error>
    </div>
  );
}

const mapStateToProps = store => ({ ...store });

const mapDispatchToProps = dispatch => ({
  getNewsFrom: options => dispatch(newsActions.getNewsFrom(options)),
  addNewsToFavorite: options => dispatch(newsActions.addNewsToFavorite(options)),
  removeNewsFromFavorite: options => dispatch(newsActions.removeNewsFromFavorite(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);