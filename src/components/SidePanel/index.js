import React from "react";
import SideNews from "../SideNews";
import NewsSources from "../NewsSources";

const SidePanel = (props) => (
    <div className="col s4">
        <NewsSources source={props.source} />
        <SideNews />
    </div>
);

export default SidePanel;
