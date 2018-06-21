import React from "react";
import SideNews from "../../containers/SideNews";
import NewsSources from "../NewsSources";

const SidePanel = ({ source }) => (
  <div className="col s4">
    <NewsSources source={source} />
    <SideNews />
  </div>
);

export default SidePanel;
