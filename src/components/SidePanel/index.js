import React from "react";
import SideNews from "../../components/SideNews";
import NewsSources from "../NewsSources";

const SidePanel = props => (
  <div className="col s4">
    <NewsSources
      source={props.source}
      getNewsFrom={props.getNewsFrom}
      news={props.news}
    />
    <SideNews getNewsFrom={props.getNewsFrom} sideNews={props.sideNews} />
  </div>
);

export default SidePanel;
