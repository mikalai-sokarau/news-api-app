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
      render={({ match: {params: {source}} }) => (
        <div className="row">
          <News source={source} />
          <SidePanel source={source} />
        </div>
      )}
    />
  </div>
);

export { App };
