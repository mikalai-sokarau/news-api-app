import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import * as newsActions from "../../reducers/index";
import News from "../../components/News";
import SidePanel from "../../components/SidePanel";
import NavBar from "../../components/NavBar";
import FavoriteNews from "../../components/FavoriteNews";
import { NEWS_SOURCES } from "../../common/constants";

const DEFAULT_PATH = NEWS_SOURCES[0].shortName;

const App = ({
  location,
  history,
  news,
  sideNews,
  favoriteNews,
  favoriteNewsKeys,
  getNewsFrom,
  addNewsToFavorite,
  removeNewsFromFavorite
}) => (
  <div className="container-fluid">
    <NavBar location={location} history={history} />
    <Switch>
      <Redirect path="/" exact to={`/${DEFAULT_PATH}`} />
      <Route
        path="/favorite"
        render={() => (
          <FavoriteNews
            history={history}
            news={favoriteNews}
            removeNewsFromFavorite={removeNewsFromFavorite}
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
              getNewsFrom={getNewsFrom}
              source={source}
              news={news}
              favoriteNewsKeys={favoriteNewsKeys}
              addNewsToFavorite={addNewsToFavorite}
              removeNewsFromFavorite={removeNewsFromFavorite}
            />
            <SidePanel
              getNewsFrom={getNewsFrom}
              source={source}
              sideNews={sideNews}
            />
          </div>
        )}
      />
    </Switch>
  </div>
);

const mapStateToProps = store => ({...store});

const mapDispatchToProps = dispatch => ({
  getNewsFrom: options => dispatch(newsActions.getNewsFrom(options)),
  addNewsToFavorite: options =>
    dispatch(newsActions.addNewsToFavorite(options)),
  removeNewsFromFavorite: options =>
    dispatch(newsActions.removeNewsFromFavorite(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
