import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import * as newsActions from "../../store/reducers";
import News from "../../components/News";
import SidePanel from "../../components/SidePanel";
import NavBar from "../../components/NavBar";
import FavoriteNews from "../../components/FavoriteNews";
import { NEWS_SOURCES } from "../../common/constants";

const DEFAULT_PATH = NEWS_SOURCES[0].shortName;

class App extends PureComponent {
  render = () => (
    <div className="container-fluid">
      <NavBar location={this.props.location} history={this.props.history} />
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

export default connect(
  store => ({
    news: store.news,
    sideNews: store.sideNews,
    favoriteNews: store.favoriteNews,
    favoriteNewsKeys: store.favoriteNewsKeys
  }),
  dispatch => ({
    getNewsFrom: options => dispatch(newsActions.getNewsFrom(options)),
    addNewsToFavorite: options =>
      dispatch(newsActions.addNewsToFavorite(options)),
    removeNewsFromFavorite: options =>
      dispatch(newsActions.removeNewsFromFavorite(options))
  })
)(App);
