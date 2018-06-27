import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as newsActions from '../../reducers/index';
import News from '../../components/News';
import SidePanel from '../../components/SidePanel';
import NavBar from '../../components/NavBar';
import FavoriteNews from '../../components/FavoriteNews';
import { NEWS_SOURCES } from '../../common/constants';
import { ASIDE_NEWS_SOURCES } from '../../common/constants';

const DEFAULT_PATH = NEWS_SOURCES[0].shortName;
const DEFAULT_NEWS = NEWS_SOURCES[0];

class App extends Component {
  componentDidMount = () => {
    this.props.getNewsFrom({ consumer: 'sideNews', source: ASIDE_NEWS_SOURCES });
    this.props.getNewsFrom({
      consumer: 'news',
      source:
        NEWS_SOURCES.find(item => item.shortName === this.props.match.params.source) ||
        DEFAULT_NEWS
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category) {
      this.props.getNewsFrom({
        consumer: 'news',
        source:
          NEWS_SOURCES.find(
            item => item.shortName === this.props.match.params.category
          ) || DEFAULT_NEWS
      });
    }
  }

  render = () => (
    <div className="container-fluid">
      <NavBar
        location={this.props.location}
        clickHandler={
          this.props.location.pathname === '/favorite'
            ? () => this.props.history.goBack()
            : () => this.props.history.push('/favorite')
        }
      />
      <Switch>
        <Redirect path="/" exact to={`/${DEFAULT_PATH}`} />
        <Route
          path="/favorite"
          render={() => (
            <FavoriteNews
              history={this.props.history}
              news={this.props.favoriteNews}
              removeNewsFromFavorite={this.props.removeNewsFromFavorite}
            />
          )}
        />
        <Route
          path="/:source?"
          render={({
            match: {
              params: { source }
            }
          }) => (
            <div className="row">
              <News
                getNewsFrom={this.props.getNewsFrom}
                source={source}
                news={this.props.news}
                favoriteNewsKeys={this.props.favoriteNewsKeys}
                addNewsToFavorite={this.props.addNewsToFavorite}
                removeNewsFromFavorite={this.props.removeNewsFromFavorite}
              />
              <SidePanel
                getNewsFrom={this.props.getNewsFrom}
                source={source}
                sideNews={this.props.sideNews}
              />
            </div>
          )}
        />
      </Switch>
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
)(App);
