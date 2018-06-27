import React from "react";

const SingleSide = ({ item: {url, title} }) => (
  <div>
    <div className="divider" />
    <a href={url} target="_blank">
      <div className="section">
        <h6>{title}</h6>
      </div>
    </a>
  </div>
);

export default SingleSide;
