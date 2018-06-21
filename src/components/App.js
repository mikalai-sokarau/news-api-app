import React from "react";
import { Route } from "react-router-dom";
import News from "../containers/News";
import SidePanel from "./SidePanel";
import NavBar from "./NavBar";

const App = () => (
  <div className="container-fluid">
    <NavBar />
    <Route
      path="/:source?"
      render={({ match }) => (
        <div className="row">
          <News source={match.params.source} />
          <SidePanel source={match.params.source} />
        </div>
      )}
    />
  </div>
);

export { App };
