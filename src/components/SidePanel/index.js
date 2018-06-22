import React from "react";
import SideNews from "../../containers/SideNews";
import NewsSources from "../NewsSources";
import { PropTypes } from 'prop-types';

const SidePanel = ({ source }) => (
  <div className="col s4">
    <NewsSources source={source} />
    <SideNews />
  </div>
);

SidePanel.propTypes = {
  source: PropTypes.string
}

export default SidePanel;
