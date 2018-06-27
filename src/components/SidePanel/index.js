import React from "react";
import SideNews from "../../components/SideNews";
import NewsSources from "../NewsSources";

const SidePanel = ({source, getNewsFrom, news, sideNews}) => (
  <div className="col s4">
    <NewsSources
      source={source}
      getNewsFrom={getNewsFrom}
      news={news}
    />
    <SideNews getNewsFrom={getNewsFrom} sideNews={sideNews} />
  </div>
);

export default SidePanel;
