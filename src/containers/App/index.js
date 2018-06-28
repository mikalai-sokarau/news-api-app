import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import News from '../News';
import SidePanel from '../SidePanel';
import NavBar from '../../components/NavBar';
import FavoriteNews from '../../components/FavoriteNews';
import { removeNewsFromFavorite } from '../../reducers/index';
import { NEWS_SOURCES } from '../../common/constants';

const DEFAULT_PATH = NEWS_SOURCES[0].shortName;

const App = ({ location: { pathname }, history, favoriteNews, removeNewsFromFavorite }) => (
  <div className="container-fluid">
    <NavBar
      buttonName={pathname === '/favorite' ? 'back' : 'favorite news'}
      clickHandler={
        pathname === '/favorite' ? history.goBack : () => history.push('/favorite')
      }
    />
    <Switch>
      <Redirect path="/" exact to={`/${DEFAULT_PATH}`} />
      <Route
        path="/favorite"
        render={() => (
          <FavoriteNews
            news={favoriteNews}
            buttonName={'Home'}
            messageText={'There are no favorite news yet. First add a few from'}
            buttonClickHandler={history.goBack}
            iconClickHandler={removeNewsFromFavorite}
          />
        )}
      />
      <Route
        path="/:source"
        render={({ match: { params: { source } } }) => (
          <div className="row">
            <News source={source} />
            <SidePanel source={source} />
          </div>
        )}
      />
    </Switch>
  </div>
);

const mapStateToProps = ({favoriteNews}) => ({ favoriteNews });

const mapDispatchToProps = dispatch => ({
  removeNewsFromFavorite: options => dispatch(removeNewsFromFavorite(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
