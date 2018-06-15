import React from "react";

export const SingleSide = ({ item }) => (
  <div>
    <div className="divider" />
    <a href={item.url} target="_blank">
      <div className="section">
        <h6>{item.title}</h6>
      </div>
    </a>
  </div>
);
