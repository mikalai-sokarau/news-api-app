import React from "react";
import PropTypes from "prop-types";

const SingleSide = ({ item }) => (
  <div>
    <div className="divider" />
    <a href={item.url} target="_blank">
      <div className="section">
        <h6>{item.title}</h6>
      </div>
    </a>
  </div>
);

SingleSide.propTypes = {
  item: PropTypes.object
};

export default SingleSide;
