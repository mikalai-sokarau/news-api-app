import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getNewsFrom } from "../../store/reducers";
import News from "../../components/News";
import SidePanel from "../../components/SidePanel";
import NavBar from "../../components/NavBar";
import FavoriteNews from "../../components/FavoriteNews";

class App extends PureComponent {
  render = () => (
    <div className="container-fluid">
      <NavBar />
      <Switch>
        <Route path="/favorite" component={FavoriteNews} />
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
  store => ({ news: store.news, sideNews: store.sideNews }),
  dispatch => ({ getNewsFrom: options => dispatch(getNewsFrom(options)) })
)(App);
